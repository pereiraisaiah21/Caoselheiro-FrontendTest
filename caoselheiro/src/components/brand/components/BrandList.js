import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import SectionTitle from "../../titles/components/SectionTitle";

import styles from "../Brand.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
/**
 * 
 * @returns 
 */

function BrandList () {

    const brandsData = [
        {
            name : "Buddy",
            url : "",
            image : ""
        },
        {
            name : "PetGames",
            url : "",
            image : ""
        },
        {
            name : "Kong",
            url : "",
            image : ""
        },
        {
            name : "Buddy",
            url : "",
            image : ""
        },
        {
            name : "PetGames",
            url : "",
            image : ""
        },
        {
            name : "Kong",
            url : "",
            image : ""
        },
    ];

    return (

        <section>
            <div>
            <SectionTitle description="Principais" />
            </div>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation]}
                    className={styles.__showcase__carousel}
                >
                    {   
                        brandsData.map( ( brand, key ) => {
                            return (
                                <SwiperSlide className="" key={key}>
                                    <figure>
                                        <img alt="" className="" src="" />
                                        <figcaption>
                                            {brand.name}
                                        </figcaption>
                                    </figure>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default BrandList;