import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import BlogListing from "./BlogListing";

import styles from "../Blog.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function BlogCarousel ({
    blogArticles
}) {

    const handlePrevClick = () => {
        const swiper = document.querySelector( '#blogCarousel' ).swiper;
        swiper.slidePrev();
    }
    const handleNextClick = () => {
        const swiper = document.querySelector( '#blogCarousel' ).swiper;
        swiper.slideNext();
    }

    return (

        <>
            <button className={styles.__carousel__dotleft} onClick={handlePrevClick} />
            <Swiper
                spaceBetween={10}
                slidesPerView={(window.innerWidth < 567) ? 1 : (window.innerWidth > 568 && window.innerWidth < 767 ? 2 : (window.innerWidth > 991  ? 4 : 4))}
                modules={[Navigation, Pagination]}
                className={styles.__carousel}
                id="blogCarousel"
                pagination={{ clickable: true }}
                navigation={false}
                loop={true}
            >
                {   
                blogArticles !== null 
                ?
                    blogArticles.map( ( article, key ) => {
                        return (
                            <SwiperSlide className="" key={key}>
                                <BlogListing blogArticle={article} />
                            </SwiperSlide>
                        )
                    })
                    :
                    ""
                }
            </Swiper>
            <button className={styles.__carousel__dotright} onClick={handleNextClick} />
        </>
    );
}

export default BlogCarousel;