import React from "react";

import Crowd from "../../../images/header/crowd.png";

import styles from "../Header.module.scss";

/**
 * 
 * @returns 
 */

function HeaderMenu () {

    const menuPages = [
        {
            desc : "Brincar",
            url  : "/brincar"
        },
        {
            desc : "Brincar",
            url  : "/brincar"
        },
        {
            desc : "Brincar",
            url  : "/brincar"
        },
        {
            desc : "Brincar",
            url  : "/brincar"
        },
        {
            desc : "Brincar",
            url  : "/brincar"
        },
        {
            desc : "Brincar",
            url  : "/brincar"
        }
    ];

    return (
        <div className={styles.__menu}>
            <ul className={styles.__menu__list}>
                {
                    menuPages.map( ( page, key ) => {
                        return (
                            <li className={styles.__menu__list__item} key={key}>
                                <a className={styles.__menu__list__anchor} href={page.url} title={page.desc}>
                                    {page.desc}
                                </a>
                            </li>
                        )
                    })
                }
                <li className={styles.__menu__list__item}>
                    <a className={styles.__menu__list__anchor__offer} href="/ofertas" title="Ir para Ofertas">
                        OFERTAS
                    </a>
                </li>
                <li className={styles.__menu__list__item}>
                    <a className={styles.__menu__list__anchor} href="/ofertas" title="Ir para Ofertas">
                        <img alt="" className={styles.__menu__list__icon} src={Crowd} />
                        COLEÇÃO DE OUTONO
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderMenu;