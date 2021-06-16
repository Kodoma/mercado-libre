import React from 'react';
import styles from '../Items.module.css';
import { Link, Typography } from '@material-ui/core';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router';

const Price: React.FunctionComponent<PriceProps> = ({ id, amount, currency, free_shipping }) => {
    const router = useRouter();
    const { search } = router.query;
    return (
        <div className={styles.priceContainer}>
            {search ? (
                <Link href={`/items/${id}`} className={styles.price}>
                    <Typography variant="h6">
                        <NumberFormat
                            value={amount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={currency}
                        />
                    </Typography>
                </Link>
            ) : (
                <Typography variant="h4" className={styles.price}>
                    <NumberFormat
                        value={amount}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={currency}
                    />
                </Typography>
            )}
            {free_shipping && (
                <div className={styles.freeShipping}>
                    <Image
                        src={
                            search
                                ? '/images/ic_shipping_list.png'
                                : '/images/ic_shipping_vip.png'
                        }
                        alt="Envios Gratis"
                        width={search ? '18px' : '32px'}
                        height={search ? '18px' : '32px'}
                    />
                </div>
            )}
        </div>
    );
};

export default React.memo(Price);

interface PriceProps {
    id: string;
    amount: string;
    currency: string;
    free_shipping: boolean;
}

interface PriceProps {
    id: string;
    amount: string;
    currency: string;
    free_shipping: boolean;
}
