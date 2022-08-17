import React from "react";

import SectionTitle from "../../../titles/components/SectionTitle";
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
                <SectionTitle description="Instagram" />
            </div>
            <div className={styles.__wrapImage}>
                <InstagramCarousel />
            </div>
        </section>
    );
}

export default InstagramList;