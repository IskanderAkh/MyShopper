import React, { createContext, useState, useEffect } from "react";
import all_product from "./assets/all_products";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  let currentRouter = '/';
  //   const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart from sessionStorage on component mount
    const storedCart = sessionStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  });

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const changeTheRoute = (routeName) => {
    if (routeName) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      currentRouter = routeName;
    } else {
      currentRouter = '/';
    }
    return currentRouter;
  };

  const addToCart = (itemId, selectedSize, selectedColor) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId]) {
        // Existing item logic
        const existingItem = updatedCart[itemId];
        const existingSizeIndex = existingItem.selectedSizes.findIndex(size => size === selectedSize);
        const existingColorIndex = existingItem.selectedColors.findIndex(color => color === selectedColor);

        
        existingItem.selectedSizes.push(selectedSize);
        existingItem.selectedColors.push(selectedColor);
        existingItem.quantity += 1;

      } else {
        // New item logic
        updatedCart[itemId] = {
          quantity: 1,
          selectedSizes: [selectedSize],
          selectedColors: [selectedColor]
        };
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = (updatedCart[itemId] || 0) - 1;
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId].quantity || 0;
      if (quantity > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(itemId));
        totalAmount += itemInfo.price * quantity;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      const itemSizes = cartItems[itemId];
      if (Array.isArray(itemSizes)) {
        totalItem += itemSizes.reduce((acc, size) => acc + size.quantity, 0);
      } else {
        totalItem += itemSizes.quantity || 0;
      }
    }
    return totalItem;
  };

  const orderItems = async (formData) => {
    let currentCartItems = [];
    Object.keys(cartItems).forEach((itemId) => {
      const itemDetails = cartItems[itemId];
      const quantity = itemDetails.quantity || 0;
      if (quantity > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(itemId));
        currentCartItems.push({
          id: itemId,
          quantity,
          price: itemInfo.price,
          total: itemInfo.price * quantity,
          selectedSizes: itemDetails.selectedSizes || [],
          selectedColors: itemDetails.selectedColors || []
        });
      }
    });

    const orderString = JSON.stringify(currentCartItems);

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        order: orderString,
        name: formData.customerData.name,
        email: formData.customerData.email,
        tel: formData.customerData.phone,
        country: formData.addressData.country,
        city: formData.addressData.city,
        street: formData.addressData.street,
        house: formData.addressData.house,
        apartment: formData.addressData.apartment,
        comment: formData.commentsData.comments
      });
      alert(`Thank you for ordering! Your order ID: ${docRef.id}`)
      setCartItems(getDefaultCart()); // Clear the cart after successful order
      navigate('/');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart, orderItems, changeTheRoute };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
