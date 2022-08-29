import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import styles from "../Product.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ProductCarouselCategories ({
    categories
}) {

    const handlePrevClick = () => {
        const swiper = document.querySelector('#productCategoriesCarousel').swiper;
        swiper.slidePrev();
    }
    const handleNextClick = () => {
        const swiper = document.querySelector('#productCategoriesCarousel').swiper;
        swiper.slideNext();
    }

    return (
        <>
            <button className={styles.__carousel__dotleft2} onClick={handlePrevClick} />
            <Swiper
                spaceBetween={8}
                slidesPerView={(window.innerWidth < 768) ? 2 : 5}
                modules={[Navigation]}
                className={styles.__showcase__info__carousel}
                navigation={false}
                id="productCategoriesCarousel"
                loop={true}
            >
                {
                    categories !== null
                    ?
                    categories.map( ( category, key ) => {
                        return (
                            <SwiperSlide key={key}>
                                <button className={styles.__showcase__info__button}>
                                    { category.name }
                                </button>
                            </SwiperSlide>
                        )
                    })
                    :
                    ""
                }
            </Swiper>
            <button className={styles.__carousel__dotright2} onClick={handleNextClick} />
        </>
    );
}

export default ProductCarouselCategories;