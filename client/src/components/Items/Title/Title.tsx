import React from "react";
import styles from "../Items.module.css";
import {Link, Typography} from "@material-ui/core";

const Title: React.FunctionComponent<TitleProps> = ({id, title}) => {
    return (
        <Link href={`/items/${id}`} className={styles.title}>
            <Typography variant="body2" gutterBottom>
                { title }
            </Typography>
        </Link>
    );
}

export default Title;

interface TitleProps {
    id: string;
    title: string;
}