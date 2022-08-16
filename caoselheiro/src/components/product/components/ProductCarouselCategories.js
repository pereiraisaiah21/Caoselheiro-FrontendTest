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
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            className={styles.__showcase__info__carousel}
        >
            {
                categories !== null
                ?
                categories.map( ( category, key ) => {
                    return (
                        <SwiperSlide className="" key={key}>
                            <button>
                                { category.name }
                            </button>
                        </SwiperSlide>
                    )
                })
                :
                ""
            }
        </Swiper>
    )
}

export default ProductCarouselCategories;