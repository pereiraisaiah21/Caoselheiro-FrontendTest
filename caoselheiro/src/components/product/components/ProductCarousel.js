import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import ProductListing from "./ProductListing";

import styles from "../Product.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

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
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
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