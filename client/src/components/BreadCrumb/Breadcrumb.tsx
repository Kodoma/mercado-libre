import React from 'react';
import styles from './Breadcrumb.module.css';
import fetch from 'cross-fetch';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import {Breadcrumbs, Typography} from "@material-ui/core";

const Breadcrumb: React.FunctionComponent<BreadCrumbProps> = ({ search }) => {
    const [categories, setCategories] = React.useState(CategoriesInitState);
    const mounted = React.useRef(false);

    React.useEffect(() => {
        mounted.current = true;

        async function fetchItems(search: string) {
            if (!search) return;
            const request = await fetch('http://0.0.0.0:8080/api/items?search=' + search);
            const response = await request.json();
            if(mounted.current){
                handleBreadcrumbCategories(response.categories)
            }
        }
        fetchItems(search as string);
        return () => { mounted.current = false; }
    }, [search]);

    const handleBreadcrumbCategories = (categories) => {
        console.log("categories", categories)
        if(categories.length > 0) {
            localStorage.setItem("lastSearch", categories)
            setCategories(categories);

        }else {
            const localStorageCategory = localStorage.getItem("lastSearch").split(',')
            localStorageCategory.pop();
            setCategories(localStorageCategory)
        }
    }

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
