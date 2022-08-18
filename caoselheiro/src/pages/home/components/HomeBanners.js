import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import BannerDescription from "../../../components/banners/components/BannerDescription";

import Banner01 from "../../../images/banner/banner01.png";
import ArrowDown from "../../../images/icons/arrowDown.png";

import styles from "../Home.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * 
 * @returns 
 */

function HomeBanners () {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true} modules={[Navigation, Pagination]}
                className={styles.__carousel__wrap}
            >
                <SwiperSlide className={styles.__carousel__item}>
                    <div className={styles.__carousel__image} style={{background : `url(${Banner01})`}}/>
                    <BannerDescription 
                        parentClass={styles.__carousel__desc}
                        textClass={styles.__carousel__text}
                        buttonClass={styles.__carousel__button}
                        textContent="As melhores guias para os melhores passeios"
                        buttonContent="CONFIRA"
                    />
                </SwiperSlide>
                <SwiperSlide className={styles.__carousel__item}>
                    <div className={styles.__carousel__image} style={{background : `url(${Banner01})`}}/>
                    <BannerDescription 
                        parentClass={styles.__carousel__desc}
                        textClass={styles.__carousel__text}
                        buttonClass={styles.__carousel__button}
                        textContent="As melhores guias para os melhores passeios"
                        buttonContent="CONFIRA"
                    />
                </SwiperSlide>
            </Swiper>
            <div className={styles.__carousel__arrow}>
                <img alt="" className={styles.__carousel__arrow__image} src={ArrowDown} />
            </div>
        </>
    )
}

export default HomeBanners;