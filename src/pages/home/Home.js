import React from "react";

import HomeBanners from "./components/HomeBanners";
import ProductCategories from "../../components/product/components/ProductCategories";
import ProductShowcase from "../../components/product/components/ProductShowcase";
import BrandList from "../../components/brand/components/BrandList";
import BlogList from "../../components/blog/components/BlogList";
import AnnouncementPartner from "../../components/announcement/components/AnnouncementParnert";
import InstagramImages from "../../components/social/instagram/components/InstagramList";
import Newsletter from "../../components/newsletter/Newsletter";

import styles from "./Home.module.scss"

/**
 * 
 * @returns 
 */

function Home () {

    return (

        <main className={styles.home}>
            <HomeBanners />
            <div className={styles.__wrap}>
                <ProductCategories />
                <ProductShowcase />
                <BrandList />
                <AnnouncementPartner />
                <BlogList />
                <InstagramImages />
                <Newsletter />
            </div>
        </main>
    );
}

export default Home;