import React from "react";

import BannerDescription from "../../banners/components/BannerDescription";

import styles from "../Announcement.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';

function AnnouncementPartnerListing () {
    return (
        <figure className={""}>
            <figcaption>
                <img alt="" className={styles.__carousel__image} src="" />
                <BannerDescription 
                    parentClass={styles.__carousel__desc}
                    textClass={styles.__carousel__text}
                    buttonClass={styles.__carousel__button}
                    textContent="As melhores guias para os melhorespasseios"
                    buttonContent="CONFIRA"
                />
            </figcaption>
        </figure>
    );
}

export default AnnouncementPartnerListing;