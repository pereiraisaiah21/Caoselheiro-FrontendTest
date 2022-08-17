import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import SectionTitle from "../../titles/components/SectionTitle";

import Brinquedos from "../../../images/categories/brinquedos.png";
import Petiscos from "../../../images/categories/petiscos.png";
import Guias from "../../../images/categories/guias.png";
import Higiene from "../../../images/categories/higiene.png";

import styles from "../Product.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * 
 * @returns 
 */

function ProductCategories () {

    const categories = [
        {
            desc : "Petisco",
            src : Brinquedos
        },
        {
            desc : "Petisco",
            src : Petiscos
        },
        {
            desc : "Petisco",
            src : Guias
        },
        {
            desc : "Petisco",
            src : Higiene
        },
        {
            desc : "Petisco",
            src : Brinquedos
        },
        {
            desc : "Petisco",
            src : Petiscos
        },
    ];

    return (

        <section className={styles.__wrap}>
            <div>
                <SectionTitle description="Categorias" />
            </div>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        categories.map( ( category, key ) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className={styles.__carousel__item}>
                                        <img className={styles.__carousel__image} alt="" src={category.src} />
                                    </div>
                                    <span className={styles.__carousel__description}>{category.desc}</span>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default ProductCategories;