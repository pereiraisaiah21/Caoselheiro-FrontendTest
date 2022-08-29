import React from "react";

import BannerDescription from "../../banners/components/BannerDescription";

import AnnonS from "../../../images/announcement/signature.png";

import styles from "../Announcement.module.scss";

/**
 * 
 * @returns 
 */

function AnnouncementPartnerSignature () {

    return (

        <div className={styles.__signature__box}>
            <img alt="" className={styles.__signature__image} src={AnnonS} />
            <BannerDescription 
                parentClass={styles.__signature__desc}
                textClass={styles.__signature__text}
                buttonClass={styles.__signature__button}
                descriptionClass={styles.__signature__info}
                textContent="Assinatura
                Cãoselheiro"
                descriptionContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed."
                buttonContent="CONFIRA"
            />
        </div>
    );
}

export default AnnouncementPartnerSignature;