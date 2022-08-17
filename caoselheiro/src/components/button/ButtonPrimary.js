import React from "react";


/**
 * 
 * @param {*} text 
 * @param {*} styleClass 
 * @param {*} url 
 * @returns 
 */

function ButtonPrimary ({
    text,
    styleClass,
    url
}) {

    return (

       <a alt={text} className={styleClass} href={url}>
            {text}
       </a>
    );
}

export default ButtonPrimary;