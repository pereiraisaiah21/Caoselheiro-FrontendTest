import React from "react";

import SectionTitle from "../../titles/components/SectionTitle";
import BlogCarousel from "./BlogCarousel";

import styles from "../Blog.module.scss";

/**
 * 
 * @returns 
 */

function BlogList () {

    const blogArticlesData = {
        data : [
            {
                name : "Lorem ipsum dolor sit amet consectetur.",
                description : "Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.",
                url : "",
                image : ""
            },
            {
                name : "Lorem ipsum dolor sit amet consectetur.",
                description : "Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.",
                url : "",
                image : ""
            },
            {
                name : "Lorem ipsum dolor sit amet consectetur.",
                description : "Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.",
                url : "",
                image : ""
            },
            {
                name : "Lorem ipsum dolor sit amet consectetur.",
                description : "Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.",
                url : "",
                image : ""
            },
            {
                name : "Lorem ipsum dolor sit amet consectetur.",
                description : "Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.",
                url : "",
                image : ""
            },
        ]
    };

    return (

        <section className={styles.blog}>
            <div className={styles.blog__info}>
                <SectionTitle description="Principais" />
            </div>
            <BlogCarousel blogArticles={blogArticlesData.data} />
        </section>
    );
}

export default BlogList;