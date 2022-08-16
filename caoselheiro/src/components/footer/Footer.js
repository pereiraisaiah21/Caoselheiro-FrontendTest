import React from "react";

import FooterFollowUs from "../social/footer/FooterFollowUs";
import FooterAbout from "./components/FooterAbout";
import FooterList from "./components/FooterList"

import styles from "./Footer.module.scss";

/**
 * 
 * @returns 
 */

function Footer () {
    return (
        <footer className={styles.footer}>
            <section className={styles.__wrap}>
                <div className={styles.__social}>
                    <FooterAbout />
                    <FooterFollowUs />
                </div>
                <div className={styles.__options}>
                    <FooterList />
                </div>


            </section>
        </footer>
    )
}

export default Footer;