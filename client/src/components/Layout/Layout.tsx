import styles from './Layout.module.css';
import React from 'react';
import HeadSeo from '../Head/Head';
import Header from '../Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <HeadSeo />
            <CssBaseline />
            <Header />
            <main className={styles.main}>{children}</main>
        </React.Fragment>
    );
};

export default Layout;

interface LayoutProps {
    children: any;
}
