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
            <img alt="" className={styles.__card__image} src="https://s3-alpha-sig.figma.com/img/04da/4105/3f3ef3cd1dc2acb5d8d92809ee49ba63?Expires=1661731200&Signature=gO~dskCUbDxR2VFtYr-inQFUyhPowkQGyjlB5R1z7ygMcP0Q9YoMk-06L5apM3BnNwIy6M30L9H3yRPwpl47242i1rXgl-QSLToGAVyGFD1BaEeLWsVP0Iq~86Jbzs6qqrQkKA0d9MU9D1a9Lkg~ASwcmPYkjcQUqQE93iSh5f4RzdJXD24U7LGnaFVoEvtvZ5Phod3E00W16GMkGru-y~DDkXvbwoNrFNDksmMbGRPB-9WNIJYxMnFsZLZ-4BeSNa26S42WfZrfeSAXwkzc14PNLZgdw8ybRzgmIXM4OPVZU2RmZj9V5imppP4qoqIiTPsHGgveXdDOV71yaTi-Bg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
            <figcaption className={styles.__card__info}>
                <h5 className={styles.__card__title}>
                    {blogArticle.name}
                </h5>
                <p className={styles.__card__description}>
                    {blogArticle.description}
                </p>
                <button className={styles.__card__button}>
                    Ler artigo
                </button>
            </figcaption>
        </figure>
    );
}

export default BlogListing;