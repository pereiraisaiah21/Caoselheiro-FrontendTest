import React from "react";

import styles from "../Product.module.scss";

/**
 * 
 * @returns 
 */

function ProductListing () {

    return (

        <a className={styles.__item__box}>
           <figure>
                <img alt="" className="" src="" />
                <figcaption>Legenda </figcaption>
           </figure>
        </a>
    )
}

export default ProductListing;