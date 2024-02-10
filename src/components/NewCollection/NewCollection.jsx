// NewCollection.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../../ShopContext';
import './NewCollection.scss';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const NewCollection = (props, { onSelectedChange }) => {
    const { all_product, changeTheRoute } = useContext(ShopContext);
    let link = '/womazing/Shop'

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        changeTheRoute(link)
    }

    return (
        <div className='newcollection container'>
            <h1 className='newcollection-title'>Новая коллекция</h1>

            <Swiper className='newcollection-items' spaceBetween={25}
                breakpoints={{
                    240: { slidesPerView: 1.5 },
                    320: { slidesPerView: 2.5 },
                    430: { slidesPerView: 2.5 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 3 },
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Pagination, Navigation]}>


                {all_product.map((item, i) => {
                    if (props.category == item.category) {
                        return (

                            <SwiperSlide key={i}>
                                < Item key={i} price={item.price} sizes={item.sizes} colors={item.colors} name={item.name} img={item.img} id={item.id} link={item.link} />
                            </SwiperSlide>
                        )
                    }
                    else {
                        // console.log(null);
                        return null
                    }
                })}


            </Swiper>

            <Link className='newcollection-btn' onClick={handleClick} to={`/womazing/Shop`}  >Открыть магазин</Link>

        </div>
    );
};

export default NewCollection;