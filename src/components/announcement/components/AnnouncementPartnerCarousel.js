import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import AnnouncementPartnerListing from "./AnnouncementPartnerListing";

import styles from "../Announcement.module.scss";
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function AnnouncementPartnerCarousel ({
    announcementImages
}) {

    return (

        <Swiper
            spaceBetween={10}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className={styles.__carousel}
            loop={true}
            id="announcementCarousel"
        >
            {
                announcementImages.map( ( image, key ) => {
                    return (
                        <SwiperSlide className="" key={key}>
                            <AnnouncementPartnerListing image={image} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default AnnouncementPartnerCarousel;