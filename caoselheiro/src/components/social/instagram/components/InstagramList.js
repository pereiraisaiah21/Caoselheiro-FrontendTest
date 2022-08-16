import React from "react";

import InstagramCarousel from "./InstagramCarousel";

import styles from "../Instagram.module.scss";

/**
 * 
 * @returns 
 */

function InstagramList () {

    return (

        <section className={styles.instagram}>
            <div className={styles.__wrap}>
                <InstagramCarousel />
            </div>
        </section>
    );
}

export default InstagramList;