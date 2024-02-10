import React, { useContext } from 'react'
import { ShopContext } from '../../ShopContext'
import './SimilarProducts.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import Item from '../Item/Item';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './similar.module.css'
// import required modules
import { Pagination,Navigation } from 'swiper/modules';



const SimilarProducts = (props) => {
    
    const { all_product } = useContext(ShopContext)
    let currentFilter = props.filter
    let id = props.id
    const filteredProducts = all_product.filter((e) => e.filter == currentFilter && e.id != id)
    const refrechThePage = () => {
        setTimeout(() => {
            window.location.reload();
        }, 600);
    }
    return (
        <Swiper className='similar-products'
            slidesPerView={3}
            spaceBetween={25}
            breakpoints={{
                240:{slidesPerView: 1 },
                320: { slidesPerView: 1 },
                430: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
            }}
            pagination={{
                clickable: true,
                // top: "200px"
                
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            {
                filteredProducts.map((e, i) => (
                    <SwiperSlide key={i} className='similar-products-item'>

                        <button className='btn' onClick={() => refrechThePage()}>
                            <Item
                                key={i}
                                price={e.price}
                                sizes={e.sizes}
                                colors={e.colors}
                                name={e.name}
                                img={e.img}
                                id={e.id}
                                link={e.link}

                            />
                        </button>



                    </SwiperSlide>
                ))

            }
        </Swiper>
    )
}

export default SimilarProducts