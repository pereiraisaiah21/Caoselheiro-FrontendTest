import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import styles from "../Announcement.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import AnnouncementPartnerListing from "./AnnouncementPartnerListing";

function AnnouncementPartnerCarousel () {

    return (

        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            className={styles.__carousel}
        >
            <SwiperSlide className="">
                <AnnouncementPartnerListing />
            </SwiperSlide>
        </Swiper>
    );
}

export default AnnouncementPartnerCarousel;