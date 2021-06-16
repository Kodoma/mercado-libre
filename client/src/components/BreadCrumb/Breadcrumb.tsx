import React from 'react';
import styles from './Breadcrumb.module.css';
import fetch from 'cross-fetch';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import {Breadcrumbs, Typography} from "@material-ui/core";

const Breadcrumb: React.FunctionComponent<BreadCrumbProps> = ({ search }) => {
    const [categories, setCategories] = React.useState(CategoriesInitState);

    React.useEffect(() => {
        let mounted = true;
        async function fetchItems(search: string) {
            if (!search) return;
            const request = await fetch('http://0.0.0.0:8080/api/items?search=' + search);
            const response = await request.json();
            if(mounted){
                setCategories(response.categories);
            }
            return () => mounted = false;
        }

        fetchItems(search as string);
    }, [search]);

    const breadcrumbsItems = categories.map( (category, index) =>  {
        return (index < categories.length -1 ) ?
        <Link key={index} href={`/items?search=${category}`}>
            <Typography className={styles.breadcrumbsLink}>{ category }</Typography>
        </Link>
        :
        <Typography key={index} className={styles.breadcrumbsLinkBold}>{ category }</Typography>
    });


    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={styles.breadcrumbs}
        >
            { breadcrumbsItems }
        </Breadcrumbs>
    );

}

export default Breadcrumb;

interface BreadCrumbProps {
    search: string;
}

const CategoriesInitState: string[] = [];
