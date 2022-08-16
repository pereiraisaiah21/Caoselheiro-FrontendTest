import React from "react";

import styles from "../Instagram.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

function InstagramListing ({
    imageSource
}) {

    return (

        <figure className={""}>
            <img alt="" className={styles.__carousel__image} src={imageSource} />
        </figure>
    );
}

export default InstagramListing;