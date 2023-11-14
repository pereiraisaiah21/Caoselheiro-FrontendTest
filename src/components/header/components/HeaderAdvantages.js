import React from "react";

import Checked from "../../../images/icons/checked.png";
import Truck from "../../../images/icons/truck.png";
import CreditCard from "../../../images/icons/creditCard.png";

import styles from "../Header.module.scss";

/**
 * 
 * @returns 
 */

function HeaderAdvantages () {

    return (

        <ul className={styles.__adv__list}>
            <li className={styles.__adv__list__item}>
                <img alt="" className={styles.__adv__list__image} src={Checked}/> Compra <span className={styles.__adv__list__textHighlight}> 100% segura </span>
            </li>
            <li className={styles.__adv__list__item}>
                <img alt="" className={styles.__adv__list__image} src={Truck}/><span className={styles.__adv__list__textHighlight}> Frete grátis </span> acima de R$ 200</li>
            <li className={styles.__adv__list__item}>
                <img alt="" className={styles.__adv__list__image} src={CreditCard}/><span className={styles.__adv__list__textHighlight}> Parcele </span> suas compras
            </li>
        </ul>
    );
}

export default HeaderAdvantages;