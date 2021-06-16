import React from 'react';
import { Item } from '../../models/items';
import fetch from 'cross-fetch';
import styles from './Item.module.css';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import Breadcrumb from '../BreadCrumb/Breadcrumb';
import ImageGallery from './ImageGallery/ImageGallery';
import Price from '../Items/Price/Price';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';
import Loading from '../Loading/Loading';

const ItemProduct = () => {
    const [item, setItem] = React.useState(ItemProductInitState);
    const router = useRouter();
    const { id } = router && router.query;

    React.useEffect(() => {
        async function fetchItemProduct(id: string) {
            if (!id) return;
            const request = await fetch('http://0.0.0.0:8080/api/items/' + id);
            if (request.status === 200) {
                const response = await request.json();
                setItem(response.item);
            } else {
                await router.push('/error');
            }
        }

        fetchItemProduct(id as string);
    }, [id]);

    const content = (
        <div className={styles.root}>
            <Breadcrumb search={item && item.title} />
            <Card>
                <CardContent>
                    <Grid
                        container
                        alignItems={isMobile ? 'center' : 'flex-start'}
                        direction={isMobile ? 'column' : 'row'}>
                        <Grid item>
                            <ImageGallery pictures={item.pictures} />
                        </Grid>
                        <Grid item xs={isMobile ? 1 : 6} className={styles.data}>
                            <Grid item xs>
                                <Grid item xs>
                                    <Typography variant="subtitle1" className={styles.sold}>
                                        {`${item.condition} - ${item.sold_quantity} vendidos`}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Price
                                        id={item.id}
                                        amount={item.price.amount}
                                        currency={item.price.currency}
                                        free_shipping={item.free_shipping}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth={isMobile ? true : false}>
                                        Comprar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        {item.description.length > 0 && (
                            <Grid container direction="row">
                                <Typography variant="h6" gutterBottom>
                                    Descripcion del producto.
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.description}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );

    return <React.Fragment>{item === ItemProductInitState ? <Loading /> : content}</React.Fragment>;
};

export default React.memo(ItemProduct);

const ItemProductInitState: Item = {
    id: '',
    title: '',
    price: {
        amount: '',
        currency: ''
    },
    thumbnail: '',
    pictures: [],
    condition: '',
    free_shipping: false,
    sold_quantity: 0,
    description: ''
};
