import React from "react";

import styles from "../Titles.module.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function SectionTitle ({
    description
}) {

    return (
        <h2 className={styles.__sectionTitle}>
            {description}
        </h2>
    );
}

export default SectionTitle;
