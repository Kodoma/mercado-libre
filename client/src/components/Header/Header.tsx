import React from "react";
import styles from "./Header.module.css";
import Search from "./Search/Search";


const Header = () => {
    return(
        <header className={styles.header}>
            <a className={styles.logo} href="//www.mercadolibre.com.ar">
                Mercado Libre Argentina - Donde comprar y vender de todo
            </a>
            <Search />
        </header>
    )
}

export default Header