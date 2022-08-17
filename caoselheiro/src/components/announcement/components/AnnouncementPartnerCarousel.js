import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import styles from "../Announcement.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import AnnouncementPartnerListing from "./AnnouncementPartnerListing";

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
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            className={styles.__carousel}
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