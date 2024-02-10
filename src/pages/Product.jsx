import React, { useContext, useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../ShopContext'
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';
import './styles/product.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination,Navigation,Keyboard } from 'swiper/modules';
import './styles/product.scss'


const Product = () => {
    const { all_product, addToCart } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    const sizes = [...product.sizes];
    const colors = [...product.colors];
    const [numberOfItems, setNumberOfItems] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColors, setColor] = useState(colors[0])
    const swiperRef = useRef(null)
    const [colorsImg, setColorImg] = useState(product.colorImg)


    const [images, setImages] = useState([...product.imgProduct[colors[0]]])


    const handleButtonClick = (size) => {
        setSelectedSize((prevSelectedSize) => (prevSelectedSize === size ? null : size));
    };
    const handleColorClick = (color) => {
        setColor((prevSelectedColor) => (prevSelectedColor === color ? prevSelectedColor : color));
        setImages([...product.imgProduct[color]]);
    
        // Reset the Swiper when changing the color
        swiperRef.current?.swiper && swiperRef.current.swiper.slideTo(0);
      };
    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };
    useEffect(() => {
        attemptPlay();
      }, []);
    const showItemInTheCart = () => {
        console.log(numberOfItems);
    }

    const handleAddToCart = () => {
        console.log('/');
        if (selectedSize && selectedColors) {
            addToCart(productId, selectedSize, selectedColors);
        } else {
            // Handle the case where no size is selected
            alert("Please select a size or color before adding to cart.");
        }
    };


    return (
        <div className='product'>

            <div className='product-title'>
                <h1>{product.name}</h1>
                <div>Главная — Свитшоты — <span>{product.name}</span> </div>
            </div>

            <div className='product-main'>
                <Swiper className='product-main-img mySwiper'
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    // keyboard={true}
                    navigation={true}
                    modules={[Pagination,Navigation]}

                >{images.map((e, i) => (
                    <SwiperSlide key={i} className='product-main-img-slide'>
                      {e === "https://oldnavy.gap.com/webcontent/0054/539/036/cn54539036.mp4" ? (
                        <video
                          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                          playsInline
                          loop
                          muted
                          alt="All the devices"
                          ref={videoEl}
                          src="https://oldnavy.gap.com/webcontent/0054/539/036/cn54539036.mp4"
                        ></video>
                      ) : (
                        <img src={e} alt="" />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="product-main-text">
                    <div>
                        <h2>${product.price}</h2>
                    </div>
                    <h5>Выберите размер</h5>
                    <div className='product-main-text-sizes'>
                        {sizes.map((size, i) => (
                            <button
                                key={i}
                                className={`size-button ${selectedSize === size ? 'selectedBtn' : ''}`}
                                onClick={() => handleButtonClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <h5>Выберите цвет: {selectedColors}</h5>
                    <div className='product-main-text-colors'>
                        {
                            colors.map((item, i) => (
                                <button className={`${item} ${selectedColors == item ? 'selectedColor colorsBtn' : 'colorsBtn'}`} key={i} name={item}
                                    onClick={() => handleColorClick(item)}

                                >  {colorsImg[i] ? <img src={colorsImg[i]} alt="" /> : <></>

                                    }
                                </button>
                            ))
                        }
                    </div>

                    <div className='toCartbtn'>

                        <div type="number" id="numberOfItems">
                            {numberOfItems}
                        </div >
                        <button onClick={handleAddToCart} className='btn-to-cart'>Добавить в корзину</button>



                    </div>
                </div>
            </div>
            <SimilarProducts filter={product.filter} id={product.id} product={product} />
        </div>
    )
}

export default Product