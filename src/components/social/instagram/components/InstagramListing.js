import React from "react";

import styles from "../Instagram.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function InstagramListing ({
    imageSource
}) {

    return (

        <figure className={styles.__carousel__item}>
            <img alt="" className={styles.__carousel__image} src={imageSource} />
        </figure>
    );
}

export default InstagramListing;