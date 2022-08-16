import React from "react";

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
                                    {page.icon}
                                    {page.desc}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HeaderMenu;