import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import SectionTitle from "../../titles/components/SectionTitle";

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
        {
            name : "Kong",
            url : "",
            image : ""
        },
    ];

    return (

        <section className={styles.__brand}>
            <div>
            <SectionTitle description="Principais marcas" />
            </div>
            <div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.__brand__carousel}
                >
                    {   
                        brandsData.map( ( brand, key ) => {
                            return (
                                <SwiperSlide className="" key={key}>
                                    <figure className={styles.__brand__carousel__item}>
                                        <img alt={brand.name} className={styles.__brand__carousel__image} src="https://s3-alpha-sig.figma.com/img/61d5/7758/569855920eb97e4d6a56cfe1add20fb2?Expires=1661731200&Signature=X-Wt8CXXv37kzfixcMybhapFsAha5SuGLq~HyHKMopoF0QGyfBJttOw4mSf4mR0rbZL0m7Rd3ppVuD~EeJTaynbInHDHLM2o0sGN~OWF8p98nJBUvcLb8Tm05j~YhzVWd0EOZjZ3rNbUWlq2SYd1fEUoZtYPImhm~-T5HkW2YhP-YfYh4DcL6W7PcPi2nB~ZK3JUuGxoQweC~1J-zP~0S00wqaUfefsNaxOqxE0MOqBg~pNWKD5qac1TU1U9XAYH26O81rxxGxM03EwXAtl1dKXOhUabh1JNOHqO6wZszl6OG-fLRCVHocssF6mWZA1W-XDG6ymt0YuDPkSQgsnZEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
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