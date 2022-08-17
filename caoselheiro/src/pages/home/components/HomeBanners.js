import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import BannerDescription from "../../../components/banners/components/BannerDescription";

import Banner01 from "../../../images/banner/banner01.png";

import styles from "../Home.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * 
 * @returns 
 */

function HomeBanners () {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            className={styles.__carousel__wrap}
        >
            <SwiperSlide className={styles.__carousel__item}>
                <div className={styles.__carousel__image} style={{background : `url(${Banner01})`}}/>
                <BannerDescription 
                    parentClass={styles.__carousel__desc}
                    textClass={styles.__carousel__text}
                    buttonClass={styles.__carousel__button}
                    textContent="As melhores guias para os melhorespasseios"
                    buttonContent="CONFIRA"
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeBanners;