import React from "react";

import HomeBanners from "./components/HomeBanners";
import ProductCategories from "../../components/product/components/ProductCategories";
import ProductShowcase from "../../components/product/components/ProductShowcase";
import BrandList from "../../components/brand/components/BrandList";
import BlogList from "../../components/blog/components/BlogList";

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
                <BlogList />
            </div>
        </main>
        
    )
}

export default Home;