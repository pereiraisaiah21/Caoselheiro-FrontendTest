import React from "react";

import FooterListPages from "./FooterListPages";

import styles from "../Footer.module.scss";

/**
 * 
 * @returns 
 */

function FooterList () {

    const footerLists = [
        {
            nameSection : "Seção 01",
            pages : [
                {
                    description : "Pagina",
                    url : "",
                    icon : ""
                }
            ]
        },
        {
            nameSection : "Seção 01",
            pages : [
                {
                    description : "Pagina",
                    url : "",
                    icon : ""
                }
            ]
        }
    ];

    return (

        <div className={"styles.footer"}>
        {
            footerLists.map( ( section, key ) => {
                return (
                    <ul key={key}>
                        <span>
                            {section.nameSection}
                        </span>
                        <FooterListPages pages={section.pages} />
                    </ul>
                )
            })
        }
        </div>
    )
}

export default FooterList;