import React from "react";

import Econverse from "../../../images/footer/econverse.png";
import Vtex from "../../../images/footer/vtex.png";

import styles from "../Footer.module.scss";

/**
 * 
 * @returns 
 */

function FooterContact () {

    return (

        <div className={styles.__contact}>
            <ul className={styles.__contact__list}>
                <li className={styles.__contact__item}>O Cãoselheiro Comércio LTDA</li>
                <li className={styles.__contact__item}>CNPJ: 30.324.633/0001-16</li>
                <li className={styles.__contact__item}>© Todos os direitos reservados. 2021</li>
            </ul>
            <div className={styles.__contact__itemImage}>
                <a className="" href="" title="">
                    <img alt="" className="" src={Econverse} />
                </a>
                <a className="" href="" title="">
                    <img alt="" className="" src={Vtex} />
                </a>
            </div>
        </div>
    )
}

export default FooterContact;