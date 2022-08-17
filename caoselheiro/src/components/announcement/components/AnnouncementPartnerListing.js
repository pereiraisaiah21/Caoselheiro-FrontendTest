import React from "react";

import BannerDescription from "../../banners/components/BannerDescription";

import styles from "../Announcement.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function AnnouncementPartnerListing ({
    image
}) {

    return (

        <figure className={styles.__carousel__fig}>
            <figcaption>
                <img alt="" className={styles.__carousel__image} src={image.image} />
                <BannerDescription 
                    parentClass={styles.__carousel__desc}
                    textClass={styles.__carousel__text}
                    buttonClass={styles.__carousel__button}
                    descriptionClass={styles.__carousel__info}
                    textContent="Parceiros"
                    descriptionContent="Lorem ipsum dolor sit amet, consectetur"
                    buttonContent="CONFIRA"
                />
            </figcaption>
        </figure>
    );
}

export default AnnouncementPartnerListing;