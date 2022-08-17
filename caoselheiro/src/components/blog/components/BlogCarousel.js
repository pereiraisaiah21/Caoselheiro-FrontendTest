import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import BlogListing from "./BlogListing";

import styles from "../Blog.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function BlogCarousel ({
    blogArticles
}) {

    console.log("7",blogArticles)
    return (

        <Swiper
            spaceBetween={10}
            slidesPerView={(window.innerWidth < 768) ? 1 : 4}
            modules={[Navigation]}
            className={styles.__carousel}
            id="blogCarousel"
            navigation={true}
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
    );
}

export default BlogCarousel;