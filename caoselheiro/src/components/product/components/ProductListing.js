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
                        <img alt="" className={styles.__item__image} src={"https://s3-alpha-sig.figma.com/img/1589/74be/4740369adfb4d5ff3dab0ad1c4528f38?Expires=1661731200&Signature=DpgEhlWA0lUscAC0vFAmQ6LiuzrEC1ZIqSy6Lm~foBjdJrD9y~jOAg2UsUZKUY0mjFtG-4SnMARuyyQ6PjpOfmeO5ozfWqiYTg3WBsVyxyFQoLGyKACA3IA4Hw4vCSju1CWCDUaBbz6YnyV9X7j3RhlOR-A8heLoASzus04U44QWVhSmu2t2G17DHplij7eBe9icHh5oL4BDqB7LWPtmBpppTAaTarnLMzYRtWhNdA2qjCcY4vfptMsv4FyHnFokKrDR~zfUiiBL-WPpDuS0PjhogMhpUgVbXYiGQQfhbJ4FLDQRZ4c46XIK7A8GhXTEEWYNruMvggWCWwNuDAF0Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"} />
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
                                    Por <span>R$ 90,69</span>
                                </ins>
                            </div>
                            <div className={styles.__item__installment}>
                                <ins className={styles.__item__installment__price}>R$ 85,69</ins>
                                <span className={styles.__item__installment__text}>Para assinantes</span>
                            </div>
                            <button className={styles.__item__addCart}>
                                Adicionar
                            </button>
                        </div>
                </figure>
            </a>
        </li>
    )
}

export default ProductListing;