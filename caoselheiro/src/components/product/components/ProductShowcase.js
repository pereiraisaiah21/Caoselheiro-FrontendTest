import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductShowcase () {

    const [ productsData, setProductsData ] = useState({
        data : [
            {
                productName : "",
                descriptionShort : "",
                photo : "",
                price : 0
            }
        ],
        error : ""
    });

    useEffect(() => {

        axios.get( `https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json` )
        .then( response => {

            setProductsData({
                ...productsData,
                data : response.data
            })
        })
        .catch( err => {

            setProductsData({
                ...productsData,
                error : err
            })
        })
    }, []) ;

    return;
}

export default ProductShowcase;
