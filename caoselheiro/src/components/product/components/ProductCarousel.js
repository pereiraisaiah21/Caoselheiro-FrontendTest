import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import ProductListing from "./ProductListing";

import styles from "../Product.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ProductCarousel ({
    products
}) {

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={(window.innerWidth < 768) ? 1 : 4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            navigation={true}
            id="productCarousel"
            className={styles.__showcase__carousel}
        >
            {
                products !== null 
                ?  
                products.map( ( product, key ) => {
                    return (
                        <SwiperSlide className="" key={key}>
                            <ProductListing productData={product} />
                        </SwiperSlide>
                    )
                })
                :
                ""
            }
            <a>
                Ver todos
            </a>
        </Swiper>
    )
}
;
export default ProductCarousel;