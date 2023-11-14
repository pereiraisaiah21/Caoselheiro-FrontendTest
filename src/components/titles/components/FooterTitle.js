import React from "react";

import styles from "../Titles.module.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function FooterTitle ({
    description
}) {

    return (
        <h4 className={styles.__footerTitle}>
            {description}
        </h4>
    );
}

export default FooterTitle;
