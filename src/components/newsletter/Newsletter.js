import React from "react";

import User from "../../images/icons/user-02.png";
import Email from "../../images/icons/email.png";

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
                    <img alt="" className={styles.__news__box__icon} src={User} />
                    <input className={styles.__news__box__input} placeholder="Digite seu nome" type="text" />
                </fieldset>
                <fieldset className={styles.__news__box}>
                    <img alt="" className={styles.__news__box__icon} src={Email} />
                    <input className={styles.__news__box__input} placeholder="Digite seu e-mail" type="text" />
                </fieldset>
                <fieldset className={styles.__news__send}>
                    <button className={styles.__news__button}>
                        Enviar
                    </button>
                </fieldset>
            </form>
        </section>
    );
}

export default Newsletter;