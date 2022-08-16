import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Petiscos from "../../../images/categories/dog_01.png";

import styles from "../Product.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * 
 * @returns 
 */

function ProductCategories () {

    const categories = [
        {
            desc : "Petisco",
            src : Petiscos
        },
        {
            desc : "Petisco",
            src : Petiscos
        },
        {
            desc : "Petisco",
            src : Petiscos
        },
        {
            desc : "Petisco",
            src : Petiscos
        }
    ];

    return (

        <section className={styles.__wrap}>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation]}
            >
                {
                    categories.map( ( category, key ) => {
                        return (
                            <SwiperSlide className={styles.__carousel} key={key}>
                                <img alt="" className={styles.__carousel__image} src={category.src} />
                                <span>Nome</span>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default ProductCategories;