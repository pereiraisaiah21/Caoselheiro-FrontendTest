import React from "react";

import Facebook from "../../../images/social/facebook.png"
import Instagram from "../../../images/social/instagram.png"
import Youtube from "../../../images/social/youtube.png"

import styles from "./Footer.module.scss";

/**
 * 
 * @returns 
 */

function FooterFollowUs () {

    return (

        <div className={styles.follow}>
            <p className={styles.follow__text}>
                Nos siga nas nossas
            </p>
            <p className={styles.follow__text}>
                redes sociais
            </p>
            <ul className={styles.__social__list}>
                <li className={styles.__social__item}>
                    <a className={styles.__social__anchor}>
                        <img alt="" className={styles.__social__icon} src={Facebook} />
                    </a>
                </li>
                <li className={styles.__social__item}>
                    <a className={styles.__social__anchor}>
                        <img alt="" className={styles.__social__icon} src={Instagram} />
                    </a>
                </li>
                <li className={styles.__social__item}>
                    <a className={styles.__social__anchor}>
                        <img alt="" className={styles.__social__icon} src={Youtube} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterFollowUs;