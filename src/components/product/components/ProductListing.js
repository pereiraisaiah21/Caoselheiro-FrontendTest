import React from "react";

import Heart from "../../../images/icons/heart.png";

import styles from "../Product.module.scss";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function ProductListing ({
    productData, 
    setProducDataModal,
    typeExhibitionModal
}) {

    const handleProductClick = function() {
        typeof setProducDataModal === 'function' ? setProducDataModal( productData ) : setProducDataModal(null) ;
    }

    return (
        
        <>
        {
            !typeExhibitionModal
            ?
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
                            <figcaption className={styles.__item__info}>
                                <h2 className={styles.__item__name}>
                                    {productData.productName}
                                </h2>
                            </figcaption>
                            <div className={styles.__item__prices}>
                                <div className={styles.__item__prices__box}>
                                    <del className={styles.__item__prices__old}>
                                        De <span>R$ {productData.price.toFixed(2).replace(".", ",")}</span>
                                    </del>
                                    <ins className={styles.__item__prices__new}>
                                        Por <span>R$ 90,69</span>
                                    </ins>
                                </div>
                                <div className={styles.__item__installment}>
                                    <ins className={styles.__item__installment__price}>R$ 85,69</ins>
                                    <span className={styles.__item__installment__text}>Para assinantes</span>
                                </div>
                                <button className={styles.__item__addCart} onClick={handleProductClick}>
                                    Adicionar
                                </button>
                            </div>
                    </figure>
                </a>
            </li>
            :
            <a className="product__modal">
                <div className="product__modal__image">
                    <img alt="" className="product__modal__image__content" src="https://s3-alpha-sig.figma.com/img/1589/74be/4740369adfb4d5ff3dab0ad1c4528f38?Expires=1662940800&Signature=TIc0KgS8l6o1-uGUu~xfPkaAQ3JcxE34Lb5yZb6YRks4dqdiDHLjhwFhnvfWMQCrAmsO82kI-rMDX-OjEanlkkUuyCg6j~qMY7o9BILJa9BBgR2yesw5MZ63wC5ZN~OoAwF7sFuwAQd1xi6OBcpCi9n1SdIJP9Yxcry0twDItxrXm1Czt1NgQ8fBVb6~Nimub6JAuABdfJk-ZY55hWs25CiOzOKl10MApzQ6kUenEO9C5V61nSQXRRNuwT1GKmzgMvOFr3Smte6wIyLhTGzoZYDZBKEYHY5hq1-ELr8yf1soXq~eqYClWr6EMkHr0pwCTD24D4l~QOwEwXfhe1njaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                </div>
                <div className="product__modal__data">
                    <h5 className="product__modal__name">
                        {productData.productName}
                    </h5>
                    <ins className="product__modal__price">
                        R$ {productData.price.toFixed(2).replace(".", ",")}
                    </ins>
                    <p className="product__modal__description">
                        {productData.descriptionShort}
                    </p>
                    <button  className="product__modal__redirect" title={`Ir para página do produto ${productData.productName}`}>
                        Veja mais detalhes do protudo
                    </button>
                </div>
            </a>
        }
        </>
    );
}

export default ProductListing;