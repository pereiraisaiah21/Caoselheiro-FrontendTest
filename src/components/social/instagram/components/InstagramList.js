import React from "react";

import SectionTitle from "../../../titles/components/SectionTitle";
import InstagramCarousel from "./InstagramCarousel";
import ButtonPrimary from "../../../button/ButtonPrimary";

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
                <ButtonPrimary text="+Seguir" styleClass={styles.__wrap__see} url="/produtos" />
            </div>
            <div className={styles.__wrapImage}>
                <InstagramCarousel />
            </div>
        </section>
    );
}

export default InstagramList;