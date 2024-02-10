import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../ShopContext';
import './ShopCatalog.scss';
import Item from '../Item/Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ShopCatalog = (props) => {
    const { all_product } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentFilter, setCurrentFilter] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const btns = ['Все', 'Футболки', 'Свитеры', "Куртки", "Шорты", 'Бикини', 'Платье'];
    const [slidesPerView, setSlidesPerView] = useState(7)
    const handlePageChange = (page) => {
        window.scrollTo({ top: 450, behavior: 'smooth' })
        setCurrentPage(page);
    };

    const handleFilterChange = (filter) => {
        setCurrentFilter(filter);
        setCurrentPage(1); // Reset page when changing the filter
    };
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 600) {
                setItemsPerPage(10)
            } else {
                setItemsPerPage(9)
            }
        }
        handleResize()
        return () => {
            window.addEventListener('resize', handleResize)
        }
    }, [])

    const firstItemIndex = (currentPage - 1) * itemsPerPage;
    // Filter items based on the current filter

    const filteredItems =
        currentFilter === 0
            ? all_product
            : all_product.filter((item) => item.filter.includes(btns[currentFilter]));

    const visibleItems = filteredItems.slice(firstItemIndex, firstItemIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className='shopcatalog container'>

            <Swiper
                spaceBetween={50}
                // breakpoints={swiperOptions.breakpoints}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                slidesPerView={7}
                breakpoints={{
                    240: { slidesPerView: 2.5, spaceBetween: 5 },
                    320: { slidesPerView: 2.5, spaceBetween: 5 },
                    430: { slidesPerView: 3.5, spaceBetween: 12 },
                    576: { slidesPerView: 4.5, spaceBetween: 25 },
                    768: { slidesPerView: 5.5, spaceBetween: 30 },
                    992: { slidesPerView: 5.5, spaceBetween: 30 },
                    1200: { slidesPerView: 7, spaceBetween: 30 },
                    1500: { slidesPerView: 7, spaceBetween: 50 },
                }}
                className='shopcatalog-btns'>
                {btns.map((item, filter) => (
                    <SwiperSlide
                        key={filter}
                        className={currentFilter === filter ? 'blackBtn shopcatalog-btns-btn' : 'whiteBtn shopcatalog-btns-btn'}
                        onClick={() => handleFilterChange(filter)}
                    >
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='shopcatalog-shown'>Показано: {Math.min(firstItemIndex + itemsPerPage, filteredItems.length)} из {filteredItems.length} товаров</div>

            <div className='shopcatalog-items'>
                {visibleItems.map((item, i) => (
                    <Item
                        key={i}
                        price={item.price}
                        sizes={item.sizes}
                        colors={item.colors}
                        name={item.name}
                        img={item.img}
                        id={item.id}
                        link={item.link}
                        page={'catalog'}
                    />
                ))}
            </div>
            <div className='shopcatalog-shown'>Показано: {Math.min(firstItemIndex + itemsPerPage, filteredItems.length)} из {filteredItems.length} товаров</div>

            <div className='pagination-buttons'>
                {totalPages > 1 && (
                    <div className='pagination-buttons'>
                        {[...Array(totalPages).keys()].map((page) => (
                            <button
                                key={page + 1}
                                onClick={() => handlePageChange(page + 1)}
                                className={currentPage === page + 1 ? 'blackBtn' : 'whiteBtn'}
                            >
                                {page + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopCatalog;
