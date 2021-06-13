import React from "react";
import styles from "./Breadcrumb.module.css";
import fetch from "cross-fetch";

const Breadcrumb: React.FunctionComponent<BreadCrumbProps> = ({search}) => {
    const [categories, setCategories] = React.useState(CategoriesInitState);

    React.useEffect(() => {
        async function fetchItems(search: string) {
            if(!search) return;
            const request = await fetch(
                "http://0.0.0.0:8080/api/items?search="+search
            );
            const response = await request.json();
            setCategories(response.categories);
        }

        fetchItems(search as string);
    },[search]);

    const breadcrumbs = categories.join(' > ');

    return (
        <div className={styles.breadcrumbs}>
            { breadcrumbs }
        </div>
    )
}

export default Breadcrumb

interface BreadCrumbProps {
    search: string;
}

const CategoriesInitState: string[] = [];