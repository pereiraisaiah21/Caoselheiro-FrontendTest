import React from "react";

import styles from "../Announcement.module.scss";

/**
 * 
 * @returns 
 */

function AnnouncementPartnerSignature () {

    return (

            <div className={styles.__signature}>
                <img alt="" className="" src={styles.__signature__image} />
                <BannerDescription 
                    parentClass={styles.__signature__desc}
                    textClass={styles.__signature__text}
                    buttonClass={styles.__signature__button}
                    textContent="As melhores guias para os melhorespasseios"
                    buttonContent="CONFIRA"
                />
            </div>
    );
}

export default AnnouncementPartnerSignature;