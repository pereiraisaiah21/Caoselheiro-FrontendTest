import React from "react";

import HeaderAdvantages from "./components/HeaderAdvantages";
import HeaderScope from "./components/HeaderScope";
import HeaderMenu from "./components/HeaderMenu";

import styles from "./Header.module.scss";

/**
 * 
 * @returns 
 */

function Header () {

    return (

        <header className={styles.header}>
            <div className={styles.__wrap}>
                <HeaderAdvantages />
                <HeaderScope />
                <HeaderMenu />
            </div>
        </header>
    );
}

export default Header;