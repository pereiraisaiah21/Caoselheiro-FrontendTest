import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

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
                <div className={styles.__carousel__desc}>
                    <p className={styles.__carousel__text}>
                        As melhores guias
                        para os melhores
                        passeios
                    </p>
                    <button className={styles.__carousel__button}>
                        CONFIRA
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeBanners;