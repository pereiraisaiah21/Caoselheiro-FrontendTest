import React from "react";

import styles from "../Footer.module.scss";

/**
 * 
 * @returns 
 */

function FooterListPages ({
    pages
}) {


    return (

        <div className={"styles.footer"}>
            {
                pages !== ""
                ?
                pages.map( ( page, key ) => {
                    return (
                        <li key={key}>
                            <a className="" href={page.url} title="">
                                <img alt="" className="" src={page.icon} />
                                {page.description}
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