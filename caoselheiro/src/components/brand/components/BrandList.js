import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import SectionTitle from "../../titles/components/SectionTitle";
import ButtonPrimary from "../../button/ButtonPrimary";

import Buddy from "../../../images/brand/buddy.png";
import PetGames from "../../../images/brand/petgames.png";
import Kong from "../../../images/brand/kong.png";

import styles from "../Brand.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/**
 * 
 * @returns 
 */

function BrandList () {

    const brandsData = [
        {
            name : "Buddy",
            url : "",
            image : Buddy
        },
        {
            name : "PetGames",
            url : "",
            image : PetGames
        },
        {
            name : "Kong",
            url : "",
            image : Kong
        }
    ];

    return (

        <section className={styles.__brand}>
            <div className={styles.__brand__info}>
                <SectionTitle description="Principais marcas" />
                <ButtonPrimary text="Ver todos" styleClass={styles.__brand__see} url="/brands" />
            </div>
            <div>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={(window.innerWidth < 768) ? 5 : 16}
                    slidesPerView={(window.innerWidth < 768) ? 1 : 6}
                    className={styles.__brand__carousel}
                    id="brandCarousel"
                    loop={true}
                >
                    {   
                        brandsData.map( ( brand, key ) => {
                            return (
                                <SwiperSlide className="" key={key}>
                                    <figure className={styles.__brand__carousel__item}>
                                        <img alt={brand.name} className={styles.__brand__carousel__image} src={brand.image} />
                                    </figure>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default BrandList;