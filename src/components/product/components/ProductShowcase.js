import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

import ProductCarousel from "./ProductCarousel";
import ProductCarouselCategories from "./ProductCarouselCategories";
import SectionTitle from "../../titles/components/SectionTitle";
import ButtonPrimary from "../../button/ButtonPrimary";

import styles from "../Product.module.scss";

/**
 * 
 * @returns 
 */

function ProductShowcase () {

    const [ productCategories, setProductCategories ] = useState({
        data : [
            {
                name : "É agitado",
                url : ""
            },
            {
                name : "Morder",
                url : ""
            },
            {
                name : "Late Muito",
                url : ""
            },
            {
                name : "É ansioso",
                url : ""
            },
            {
                name : "É estressado",
                url : ""
            },
            {
                name : "É agitado",
                url : ""
            },
        ],
        error : ""
    });
    const [ productData, setProductData ] = useState({
        data : null,
        error : ""
    });

    useEffect(() => {

        axios.get( `https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json` )
        .then( response => {

            setProductData({
                ...productData,
                data : response.data.products
            })
        })
        .catch( err => {

            setProductData({
                ...productData,
                error : err
            })
        })
    }, []) ;

    return (

        <>
            <section className={styles.__showcase}>
                <div className={styles.__showcase__wrap}>
                    <div className={styles.__showcase__info}>
                        <div className={styles.__showcase__info__name}>
                            <SectionTitle description="Meu cachorro..." />
                        </div>
                        <div className={styles.__showcase__info__categories}>
                            <ProductCarouselCategories categories={productCategories.data} />
                        </div>
                    </div>
                    {
                        productData !== null
                        ?
                        <ProductCarousel products={productData.data} />
                        :
                        ""
                    }
                </div>
                <ButtonPrimary text="Ver todos" styleClass={styles.__showcase__see} url="/produtos" />
            </section>
           
        </>
    );
}

export default ProductShowcase;
