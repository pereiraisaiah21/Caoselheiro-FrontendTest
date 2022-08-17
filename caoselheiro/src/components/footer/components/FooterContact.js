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
            <ul>
                <li>O Cãoselheiro Comércio LTDA</li>
                <li>CNPJ: 30.324.633/0001-16</li>
                <li>© Todos os direitos reservados. 2021</li>
                <li>
                    <a className="" href="" title="">
                        <img alt="" className="" src={Econverse} />
                    </a>
                    <a className="" href="" title="">
                        <img alt="" className="" src={Vtex} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FooterContact;