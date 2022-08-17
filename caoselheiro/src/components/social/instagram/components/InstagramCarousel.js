import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import InstagramListing from "./InstagramListing";

import Post01 from "../../../../images/instagram/post01.png";
import Post02 from "../../../../images/instagram/post02.png";
import Post03 from "../../../../images/instagram/post03.png";
import Post04 from "../../../../images/instagram/post04.png";
import Post05 from "../../../../images/instagram/post05.png";
import Post06 from "../../../../images/instagram/post06.png";

import styles from "../Instagram.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

function InstgramCarousel () {

    const instagramImages =[
        {
            src : Post01
        },
        {
            src : Post02
        },
        {
            src : Post03
        },
        {
            src : Post04
        },
        {
            src : Post05
        },
        {
            src : Post06
        },
    ]

    return (

        <Swiper
            spaceBetween={-30}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            className={styles.__carousel}
        >
            {
                instagramImages.map( ( image, key ) => {
                    return (
                        <SwiperSlide className={styles.__carousel__item} key={key}>
                            <InstagramListing imageSource={image.src} />
                        </SwiperSlide>

                    )
                })
            }
        </Swiper>
    );
}

export default InstgramCarousel;