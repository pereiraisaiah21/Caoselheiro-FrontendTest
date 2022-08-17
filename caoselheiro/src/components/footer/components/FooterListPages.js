import React from "react";

import styles from "../Footer.module.scss";

/**
 * 
 * @returns 
 */

function FooterListPages ({
    pages,
}) {

    return (

        <div className={"style"}>
            {
                pages !== ""
                ?
                pages.map( ( page, key ) => {
                    return (
                        <li className={styles.__options__item} key={key}>
                            <a className={styles.__options__anchor} href={page.url} title="" id={(page.id !== null ? page.id : "")}>
                            {
                                page.image
                                ?
                                <div className={styles.__options__imageBox}>
                                    <img alt="" className={styles.__options__image} src={page.image} />
                                </div>
                                :
                                <>
                                    {
                                        page.icon
                                        ?
                                        <img alt="" className={styles.__options__icon} src={page.icon} />
                                        :
                                        ""
                                    }
                                    {page.description}
                                </>    
                                }
                            </a>
                        </li>
                    )
                })
                :
                ""
            }
           
        </div>
    )
}

export default FooterListPages;