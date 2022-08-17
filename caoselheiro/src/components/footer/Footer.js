import React from "react";

import FooterFollowUs from "../social/footer/FooterFollowUs";
import FooterAbout from "./components/FooterAbout";
import FooterContact from "./components/FooterContact";
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
                    <FooterFollowUs />
                    <FooterAbout />
                </div>
                <div className={styles.__options}>
                    <FooterList />
                    <FooterContact />
                </div>


            </section>
        </footer>
    )
}

export default Footer;