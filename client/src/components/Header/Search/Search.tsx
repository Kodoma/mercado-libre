import fetch from "cross-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./Search.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";
import {Result} from "../../../models/search";

const SearchAutocomplete = () => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState(ResultInitState);
    const [query, setQuery] = React.useState("");
    const [inputValue, setInputValue] = React.useState("");
    const loading = open && options.length === 0;
    const { handleSubmit } = useForm();
    const router = useRouter()

    const onSubmit = () => {
        router.push("/items?search="+decodeURI(query));
    };

    const onChangeHandle = async (value: string) => {
        if ( value.length >= 3) {
            setInputValue(value);
            const request = await fetch(
                "https://api.mercadolibre.com/sites/MLA/search?q="+encodeURI(value)
            );
            const response = await request.json();
            setOptions(response.results);
        }
    };

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.autocompleteContainer}>
            <Autocomplete
                id="q"
                style={{ width: '70%', display: 'inline-block', marginTop: '8px', left: '7.5%', position: 'relative'}}
                freeSolo
                open={open}
                onOpen={(ev) => {
                    setOpen(options.length >= 2);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onInputChange={(event, newInputValue) => {
                    setQuery(newInputValue);
                }}
                getOptionSelected={(option, value) => option.title === value.title}
                getOptionLabel={option => option.title}
                options={options}
                loading={loading}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Nunca dejes de buscar"
                        variant="filled"
                        onChange={ev => {
                            if (ev.target.value !== "" || ev.target.value !== null) {
                                onChangeHandle(ev.target.value);
                            }
                            return ev.target.value
                        }}
                        InputProps={{
                            ...params.InputProps,
                            className: styles.input,
                            disableUnderline: true,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? (
                                        <CircularProgress color="inherit" size={20} />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            )
                        }}
                    />
                )}
            />
            <Button type="submit" className={styles.searchButton}>
                <div className={styles.searchIcon}></div>
            </Button>
        </form>
    );
}

export default SearchAutocomplete

const ResultInitState: Result[] = []
