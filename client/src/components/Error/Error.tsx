import React from 'react';
import styles from './Error.module.css';
import { Typography } from '@material-ui/core';
import NotFound from '../../../public/images/svg/notfound.svg';

const ErrorComponent = () => {
    return (
        <div className={styles.errorContainer}>
            <NotFound />
            <Typography variant={'h6'}>Parece que esta página no existe</Typography>
        </div>
    );
};

export default React.memo(ErrorComponent);
