import React from "react";

import FooterTitle from "../../titles/components/FooterTitle"

import styles from "../Footer.module.scss";

/**
 * 
 * @returns 
 */

function FooterAbout () {

    return (

        <div className={styles.__social__box}>
            <FooterTitle description="Sobre O Cãoselheiro" />
            <p className={styles.__social__about}>
                Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e recompensando os acertos de nossos amigos em seus processos de adestramento. Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!
            </p>
        </div>
    )
}

export default FooterAbout;