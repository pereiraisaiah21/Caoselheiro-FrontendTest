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

    return (
        
        <Swiper
            spaceBetween={14}
            slidesPerView={(window.innerWidth < 768) ? 2 : 5}
            modules={[Navigation]}
            className={styles.__showcase__info__carousel}
            navigation={true}
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
    );
}

export default ProductCarouselCategories;