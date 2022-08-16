import React from "react";

import styles from "./Newsletter.module.scss";

/**
 * 
 * @returns 
 */

function Newsletter () {
    return (
        <section className={styles.news}>
            <div className={styles.__news__img} />
            <form className={styles.__news__form}>
                <p className={styles.__news__form__title}>
                    Se increva para receber novidades e promoções
                </p>
                <fieldset className={styles.__news__box}>
                    <img alt="" className="" src="" />
                    <input className={styles.__news__box__input} placeholder="Digite seu nome" type="text" />
                </fieldset>
                <fieldset className={styles.__news__box}>
                    <img alt="" className="" src="" />
                    <input className={styles.__news__box__input} placeholder="Digite seu e-mail" type="text" />
                </fieldset>
                <button className={styles.__news__button}>
                    Enviar
                </button>
            </form>
        </section>
    );
}

export default Newsletter;