import React, { useCallback, useMemo, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { useDebounce } from 'use-debounce';

import {
    Button,
    Dialog,
    DialogContent,
    DialogActions
} from '@material-ui/core';

import { TextField, Tooltip } from '@wld/ui';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';
import { LoadingSpinner } from '../loading_spinner/loading_spinner';

import { styles } from './search_gifs_dialog_styles';
import { useGiphyResults } from '../../hooks/giphy/use_giphy_results';

const useStyles = createUseStyles(styles);

const SearchGifsDialogComponent = ({
    open,
    onClose,
    onSelect
}) => {
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebounce(query, 500);

    const handleInputChange = useCallback((event) => setQuery(event.target.value), []);

    return (
        <Dialog
            classes={{
                paper: classes.paper
            }}
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Search gifs
            </DialogTitle>
            <DialogContent
                classes={{
                    root: classes.content
                }}
            >
                <TextField
                    customClasses={{ container: classes.textField }}
                    fullWidth
                    onChange={handleInputChange}
                    value={query}
                    variant="flat"
                    placeholder="Burrito, development, etc..."
                />
                <Results
                    query={query}
                    debouncedQuery={debouncedQuery}
                    onSelect={onSelect}
                    classes={classes}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    size="small"
                    onClick={onClose}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const Results = ({ query, debouncedQuery, onSelect, classes }) => {
    const { gifs, loading: loadingResults } = useGiphyResults(debouncedQuery, 0, 3 * 3);

    const loading = useMemo(() => loadingResults || (query && (query !== debouncedQuery)),
        [query, debouncedQuery, loadingResults]);

    const handleClick = useCallback((url, id, title) => () => {
        if (typeof onSelect !== 'function') {
            return;
        }
        onSelect({ url, id, title });
    }, [onSelect]);

    return (
        <div className={classes.results}>
            {loading && <LoadingSpinner />}
            {!loading && gifs && debouncedQuery && gifs.map(({ id, url, title }) => (
                <Tooltip title="Select this gif!">
                    <button
                        key={`result_${id}`}
                        type="button"
                        className={classes.imageContainer}
                        onClick={handleClick(url, id, title)}
                    >
                        <img className={classes.image} src={url} alt={title} />
                    </button>
                </Tooltip>
            ))}
        </div>
    );
};

export const SearchGifsDialog = SearchGifsDialogComponent;
