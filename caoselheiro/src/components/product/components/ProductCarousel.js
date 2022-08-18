import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import Modal from "react-modal";

import ProductListing from "./ProductListing";

import styles from "../Product.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ProductCarousel ({
    products
}) {

    const [ productDataModal, setProducDataModal ] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    function openModal() {
        setModalIsOpen(true);
    }
    
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    
    function closeModal() {
        setModalIsOpen(false);
    }

    useEffect(() => {
        console.log(productDataModal);
        if (productDataModal !== null && productDataModal !== "") {
            setModalIsOpen(true);
        }
    }, [productDataModal]);

    Modal.setAppElement('#root');

    return (
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={(window.innerWidth < 556) ? 1 : (window.innerWidth > 557 && window.innerWidth < 776 ? 2 : (window.innerWidth > 991  ? 4 : 3))}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                navigation={true}
                id="productCarousel"
                className={styles.__showcase__carousel}
            >
                <>
                {
                    products !== null 
                    ?  
                    products.map( ( product, key ) => {
                        return (
                            <SwiperSlide className="" key={key}>
                                <ProductListing productData={product} setProducDataModal={setProducDataModal} typeExhibitionModal={false} />
                            </SwiperSlide>
                        )
                    })
                    :
                    ""
                }
                <a>
                    Ver todos
                </a>
                </>
            </Swiper>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
                contentLabel="Example Modal"
            >
               {
                    productDataModal !== ""
                    ?
                    <ProductListing productData={productDataModal !== null ? productDataModal : ""} setProducDataModal={null} typeExhibitionModal={true} />
                    :
                    ""
               }
                <button className="ModalClose" onClick={closeModal}></button>
            </Modal>
        </>
    )
}
;
export default ProductCarousel;