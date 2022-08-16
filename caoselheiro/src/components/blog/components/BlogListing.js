import React from "react";

import styles from "../Blog.module.scss";
import 'swiper/css';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function BlogListing ({
    blogArticle
}) {
    
    return (

        <figure className={styles.__card}>
            <img alt="" className={styles.__card__image} src="" />
            <figcaption>
                <h5 className={styles.__card__title}>
                    {blogArticle.name}
                </h5>
                <p className={styles.__card__description}>
                    {blogArticle.name}
                </p>
                <button className={styles.__card__button}>
                    Ler artigo
                </button>
            </figcaption>
        </figure>
    );
}

export default BlogListing;