import React from "react";

import AnnouncementPartnerCarousel from "./AnnouncementPartnerCarousel";

import styles from "../Announcement.module.scss";

/**
 * 
 * @returns 
 */

function AnnouncementPartner () {

    return (

        <section className={styles.announcement}>
            <div className={styles.__wrap}>
                <div className={"styles."}>
                    <AnnouncementPartnerCarousel />
                </div>
                <div className={styles.__signature}>

                </div>
            </div>
        </section>
    );
}

export default AnnouncementPartner;