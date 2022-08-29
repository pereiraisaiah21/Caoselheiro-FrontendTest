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
            desc : "Brinquedos",
            src : Brinquedos
        },
        {
            desc : "Petiscos",
            src : Petiscos
        },
        {
            desc : "Guias",
            src : Guias
        },
        {
            desc : "Higiene",
            src : Higiene
        },
    ];
    
    const handlePrevClick = () => {
        const swiper = document.querySelector('#categoriesCarousel').swiper;
        swiper.slidePrev();
    }
    const handleNextClick = () => {
        const swiper = document.querySelector('#categoriesCarousel').swiper;
        swiper.slideNext();
    }

    return (

        <section className={styles.__wrap}>
            <SectionTitle description="Categorias" />
            <div className={styles.__carousel}>
                <button className={styles.__carousel__dotleft} onClick={handlePrevClick} />
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={(window.innerWidth < 768) ? 10 : (window.innerWidth > 769 && window.innerWidth < 1000 ? 20 : 16)}
                    slidesPerView={(window.innerWidth < 768) ? 1 : (window.innerWidth > 769 && window.innerWidth < 1000 ? 3 : 4)}
                    navigation={false}
                    loop={true}
                    id="categoriesCarousel"
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
                <button className={styles.__carousel__dotright} onClick={handleNextClick} />
            </div>
        </section>
    )
}

export default ProductCategories;