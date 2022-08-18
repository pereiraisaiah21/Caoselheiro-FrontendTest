import React from "react";

/**
 * 
 * @param {*} param0 
 * @returns 
 */

function BannerDescription ({
    parentClass,
    textClass,
    descriptionClass,
    buttonClass,
    textContent,
    descriptionContent,
    buttonContent
}) {

    return (

        <div className={parentClass}>
            <p className={textClass}>
                {textContent}
            </p>
            <p className={descriptionClass}>
                {descriptionContent}
            </p>
            <button className={buttonClass}>
                {buttonContent}
            </button>
        </div>
    );
}

export default BannerDescription;