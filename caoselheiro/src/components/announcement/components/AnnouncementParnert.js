import React from "react";

import AnnouncementPartnerCarousel from "./AnnouncementPartnerCarousel";
import AnnouncementPartnerSignature from "./AnnouncementPartnerSignature";

import Annuon from "../../../images/announcement/partner.png";

import styles from "../Announcement.module.scss";

/**
 * 
 * @returns 
 */

function AnnouncementPartner () {

    const announcementImages = [
        {
            image : Annuon,
            description : "As melhores guias para os melhores passeios",
            url : "/Announ"
        },
        {
            image : Annuon,
            description : "As melhores guias para os melhores passeios",
            url : "/Announ"
        },
    ]

    return (

        <section className={styles.announcement}>
            <div className={styles.__wrap}>
                <div className={styles.__box}>
                    <AnnouncementPartnerCarousel className={styles.__carousel} announcementImages={announcementImages} />
                </div>
                <div className={styles.__signature}>
                    <div className={styles.__signature__fluter}>
                        <AnnouncementPartnerSignature className={styles.__post} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnnouncementPartner;