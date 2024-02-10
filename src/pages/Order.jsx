import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../ShopContext';
import { db } from '../firebase/index';
import { useNavigate } from 'react-router-dom';


const apiKey = import.meta.env.VITE_REACT_APP_RAPIDAPI_KEY;


const Order = () => {
    const navigate = useNavigate();
    const { orderItems, cartItems } = useContext(ShopContext)
    const checkIfEmpty = () => {
        // Convert cartItems object to an array
        const cartArray = Object.values(cartItems);

        // Calculate total quantity using reduce
        const totalQuantity = cartArray.reduce((sum, item) => sum + (item.quantity || 0), 0);
        console.log(totalQuantity);

        if (totalQuantity === 0) {
            console.log('else');
            navigate('/womazing/shop');
            setTimeout(() => {
                alert('Your cart is empty :/');
            }, 1500);
        } else {
            console.log('good');
        }
    };

    useEffect(() => {
        checkIfEmpty();
    }, [cartItems, navigate]);

    const url = 'https://mailcheck.p.rapidapi.com/?domain=';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': "mailcheck.p.rapidapi.com",
        },
    };

    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [addressData, setAddressData] = useState({
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
    });

    const [commentsData, setCommentsData] = useState({
        comments: '',
    });

    const handleInputChange = (e, setData) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        // Combine all data
        const formData = {
            customerData,
            addressData,
            commentsData,
        };
        if (!customerData.name || !customerData.email || !customerData.phone) {
            alert('Please provide all customer information.');
            return;
        }
    
        // Validate address data
        if (!addressData.country || !addressData.city || !addressData.street || !addressData.house || !addressData.apartment) {
            alert('Please provide all address information.');
            return;
        }
    
        // Validate comments data
        if (!commentsData.comments) {
            alert('Please provide comments.');
            return;
        }
    
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(customerData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        try {
            const response = await fetch(`${url} ${formData.customerData.email}`, options);
            const result = await response.text();
            const res = JSON.parse(result)
            if (res.valid) {
                orderItems(formData);
            } else {
                alert(`You entered not valid e-mail address: ${res.text}`)
            }
            console.log(res);
        } catch (error) {
            console.error(error);
            alert('You entered wrong e-mail address: ', error)
        }
        // Now you can send formData to Firebase or perform any other actions
        // console.log('Form Data:', formData);

        // Example: Sending data to Firebase
        // firebase.database().ref('orders').push(formData);
    };

    return (
        <div className='order'>
            <div className='order-1'>
                <form className='order-form' onSubmit={handleSubmit}>
                    <h2>Данные покупателя</h2>
                    <input
                        type='text'
                        name='name'
                        placeholder='Имя'
                        value={customerData.name}
                        onChange={(e) => handleInputChange(e, setCustomerData)}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        value={customerData.email}
                        onChange={(e) => handleInputChange(e, setCustomerData)}
                    />
                    <input
                        type='tel'
                        name='phone'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        required
                        placeholder='Телефон'
                        value={customerData.phone}
                        onChange={(e) => handleInputChange(e, setCustomerData)}
                    />
                    {/* Add other customer data inputs as needed */}
                </form>

                <form action="" className='order-form'>
                    <h2>Адрес получателя</h2>
                    <input
                        type="text"
                        name='country'
                        placeholder='Страна'
                        value={addressData.country}
                        onChange={(e) => handleInputChange(e, setAddressData)}
                    />
                    <input
                        type="text"
                        name='city'
                        placeholder='Город'
                        value={addressData.city}
                        onChange={(e) => handleInputChange(e, setAddressData)}
                    />
                    <input
                        type="text"
                        name='street'
                        placeholder='Улица'
                        value={addressData.street}
                        onChange={(e) => handleInputChange(e, setAddressData)}
                    />
                    <input
                        type="text"
                        name='house'
                        placeholder='Дом'
                        value={addressData.house}
                        onChange={(e) => handleInputChange(e, setAddressData)}
                    />
                    <input
                        type="text"
                        name='apartment'
                        placeholder='Квартира'
                        value={addressData.apartment}
                        onChange={(e) => handleInputChange(e, setAddressData)}
                    />
                </form>


                <form className='order-form' onSubmit={handleSubmit}>
                    <h2>Комментарии</h2>
                    <input
                        type='text'
                        name='comments'
                        placeholder='Комментарии'
                        value={commentsData.comments}
                        onChange={(e) => handleInputChange(e, setCommentsData)}
                    />
                </form>
            </div>
            <div>
                <button onClick={handleSubmit}>
                    Set Data and Place Order
                </button>
            </div>
        </div>
    );
};

export default Order;