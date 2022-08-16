import React from "react";

import styles from "../Product.module.scss";

import Heart from "../../../images/icons/heart.png";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ProductListing ({
    productData
}) {

    return (
        <li>
            <a className={styles.__item__box}>
                <figure className={styles.__item__favorite}>
                    <img alt="" className={styles.__item__favorite__image} src={Heart} />
                </figure>
                <figure className={styles.__item__seal}>
                    <span className={styles.__item__seal__text}>
                        40% off
                    </span>
                </figure>
                <figure className={styles.__item__product}>
                        <img alt="" className={styles.__item__image} src={productData.photo} />
                        <figcaption>
                            <h2 className={styles.__item__name}>
                                {productData.productName}
                            </h2>
                        </figcaption>
                        <div className={styles.__item__prices}>
                            <div className={styles.__item__prices__box}>
                                <del className={styles.__item__prices__old}>
                                    De <span>{productData.price}</span>
                                </del>
                                <ins className={styles.__item__prices__new}>
                                    Por <span>r$ 90,69</span>
                                </ins>
                            </div>
                            <div className={styles.__item__installment}>
                                <ins className={styles.__item__installment__price}>R$ 85,69</ins>
                                <span className={styles.__item__installment__text}>Para assinantes</span>
                            </div>
                        </div>
                </figure>
            </a>
        </li>
    )
}

export default ProductListing;