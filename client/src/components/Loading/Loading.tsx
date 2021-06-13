import { CircularProgress } from '@material-ui/core';
import React from 'react';
import styles from '../Item/Item.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <CircularProgress size={40} />
        </div>
    );
};

export default Loading;
