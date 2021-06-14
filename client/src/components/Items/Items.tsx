import React from 'react';
import fetch from 'cross-fetch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Items.module.css';
import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { Item } from '../../models/items';
import Price from './Price/Price';
import Title from './Title/Title';
import Breadcrumb from '../BreadCrumb/Breadcrumb';
import { isMobile } from 'react-device-detect';
import Loading from '../Loading/Loading';
import NotFound from '../../../public/images/svg/notfound.svg';

const ItemsList = () => {
    const [items, setItems] = React.useState(ItemsInitState);
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const search = router && router.query.search;

    React.useEffect(() => {
        setLoading(true);
        async function fetchItems(search: string) {
            if (!search || search === '') {
                setLoading(false);
                return;
            }

            const request = await fetch('http://0.0.0.0:8080/api/items?search=' + search);
            const response = await request.json();
            setLoading(false);
            setItems(response.items);
        }

        fetchItems(search as string);
    }, [search]);

    const content =
        items &&
        items.map((i) => (
            <Card className={styles.custom} square={true} key={i.id}>
                <CardContent>
                    <Paper elevation={0} className={styles.paper}>
                        <Grid
                            container
                            spacing={2}
                            justify="center"
                            alignContent="center"
                            alignItems={isMobile ? 'center' : 'flex-start'}
                            direction={isMobile ? 'column' : 'row'}>
                            <Grid item>
                                <Link
                                    href={{
                                        pathname: `/items/${i.id}`
                                    }}>
                                    <img
                                        width={160}
                                        height={160}
                                        className={styles.img}
                                        src={i.thumbnail}
                                        alt={i.title}
                                    />
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Price
                                            id={i.id}
                                            amount={i.price.amount}
                                            currency={i.price.currency}
                                            free_shipping={i.free_shipping}
                                        />
                                        <Title id={i.id} title={i.title} />
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" className={styles.condition}>
                                        {i.condition}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </CardContent>
            </Card>
        ));

    return (
        <Box width={isMobile ? '100%' : '75%'}>
            <Breadcrumb search={search as string} />
            {loading ? <Loading /> : items.length > 0 ? content : <EmptySearch />}
        </Box>
    );
};

export default ItemsList;

const ItemsInitState: Item[] = [];

const EmptySearch = () => {
    return (
        <div className={styles.emptyContainer}>
            <NotFound />
            <Typography variant={'h6'}>
                Parece que no hay items para tu búsqueda prueba con otra.
            </Typography>
        </div>
    );
};
