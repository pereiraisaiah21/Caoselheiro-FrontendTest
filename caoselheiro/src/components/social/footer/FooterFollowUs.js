import React from "react";

import Facebook from "../../../images/social/facebook.png"
import Instagram from "../../../images/social/instagram.png"
import Youtube from "../../../images/social/youtube.png"

import styles from "./Footer.module.scss";

function FooterFollowUs () {

    return (

        <div className={styles.follow}>
            <p className={styles.follow__text}>
                Nos siga nas nossas
            </p>
            <p className={styles.follow__text}>
                redes sociais
            </p>

            <ul>
                <li>
                    <a>
                        <img alt="" className="" src={Facebook} />
                    </a>
                </li>
                <li>
                    <a>
                        <img alt="" className="" src={Instagram} />
                    </a>
                </li>
                <li>
                    <a>
                        <img alt="" className="" src={Youtube} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterFollowUs;