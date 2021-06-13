import React from "react";
import styles from "./Header.module.css";
import Search from "./Search/Search";
import Link from 'next/link'

const Header = () => {
    return(
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logo} >
                    Mercado Libre Argentina - Donde comprar y vender de todo
                </a>
            </Link>

            <Search />
        </header>
    )
}

export default Header