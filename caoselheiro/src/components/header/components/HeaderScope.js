import React from "react";

import Package from "../../../images/icons/package.png";
import Heart from "../../../images/icons/heart.png";
import User from "../../../images/icons/user.png";
import Cart from "../../../images/icons/cart.png";

import styles from "../Header.module.scss";

/**
 * 
 * @returns 
 */

function HeaderScope () {
    return (
        <div className={styles.__scope}>
            <div className={styles.__scope__lg}>
                <a href="" title="">
                    <img alt="" className="" src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/66/329672766/logo-2020101912314304400.png" />
                </a>
            </div>
            <div className={styles.__scope__sr}>
                <form className={styles.__scope__sr__form}>
                    <input className={styles.__scope__sr__input} placeholder="O que você está buscando?"/>
                    <button className={styles.__scope__sr__button}>

                    </button>
                </form>
            </div>
            <div className={styles.__scope__op}>
                <a className="" href="" title="">
                   <img alt="" className={styles.__scope__op__icon} src={Package} /> 
                </a>
                <a className="" href="" title="">
                   <img alt="" className={styles.__scope__op__icon} src={Heart} /> 
                </a>
                <a className="" href="" title="">
                    <img alt="" className={styles.__scope__op__icon} src={User} />
                </a>
                <a className="" href="" title="">
                    <img alt="" className={styles.__scope__op__icon} src={Cart} />
                </a>
            </div>
        </div>
    )
}

export default HeaderScope;