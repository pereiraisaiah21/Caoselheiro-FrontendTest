import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import BannerDescription from "../../../components/banners/components/BannerDescription";

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
        >
            <SwiperSlide className={styles.__carousel__item}>
                <img alt="" className={styles.__home__carousel__image} src="https://tm.ibxk.com.br/2020/01/30/30021141299110.jpg?ims=1120x420" />
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