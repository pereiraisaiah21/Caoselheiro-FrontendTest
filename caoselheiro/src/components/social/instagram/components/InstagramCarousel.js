import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import InstagramListing from "./InstagramListing";

import styles from "../Instagram.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

function InstgramCarousel () {

    const instagramImages =[
        {
            src : "https://st2.depositphotos.com/1005147/5192/i/450/depositphotos_51926417-stock-photo-hands-holding-the-sun-at.jpg"
        },
        {
            src : "https://st2.depositphotos.com/1005147/5192/i/450/depositphotos_51926417-stock-photo-hands-holding-the-sun-at.jpg"
        },
        {
            src : "https://st2.depositphotos.com/1005147/5192/i/450/depositphotos_51926417-stock-photo-hands-holding-the-sun-at.jpg"
        },
        {
            src : "https://st2.depositphotos.com/1005147/5192/i/450/depositphotos_51926417-stock-photo-hands-holding-the-sun-at.jpg"
        },
        {
            src : "https://st2.depositphotos.com/1005147/5192/i/450/depositphotos_51926417-stock-photo-hands-holding-the-sun-at.jpg"
        },
        {
            src : "https://st2.depositphotos.com/1005147/5192/i/450/depositphotos_51926417-stock-photo-hands-holding-the-sun-at.jpg"
        },
    ]

    return (

        <Swiper
            spaceBetween={0}
            slidesPerView={6}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            className={styles.__carousel}
        >
            {
                instagramImages.map( ( image, key ) => {
                    return (
                        <SwiperSlide className="" key={key}>
                            <InstagramListing imageSource={image.src} />
                        </SwiperSlide>

                    )
                })
            }
        </Swiper>
    );
}

export default InstgramCarousel;