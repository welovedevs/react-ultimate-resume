import React, { useCallback, useMemo, useState } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { useDebounce } from 'use-debounce';

import { Dialog, DialogActions, DialogContent, DialogProps } from '@material-ui/core';
import { Button, TextField, Tooltip, Typography } from '@welovedevs/ui';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';
import { LoadingSpinner } from '../loading_spinner/loading_spinner';

import { useGiphyResults } from '../../hooks/giphy/use_giphy_results';
import { styles } from './search_gifs_dialog_styles';
import { GifAuthorCredits } from '../gifs/gif_author_credits/gif_author_credits';

const useStyles = createUseStyles(styles);

type GiphySearchResult = {
    id: string;
    url: string;
    title: string;
    user?: {
        name: string;
        profileUrl: string;
    };
};
const SearchGifsDialogComponent: React.FC<
    { onSelect: (payload: GiphySearchResult & { query: string }) => any } & DialogProps
> = ({ open, onClose, onSelect }) => {
    const classes: any = useStyles();
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
            <DialogTitle classes={{ root: classes.title }}>
                <FormattedMessage id="Gifs.searchdialog.title" defaultMessage="Search gifs" />
                <Typography variant="body3">
                    <FormattedMessage id="Gifs.searchdialog.poweredByGiphy" defaultMessage="Powered by Giphy" />
                </Typography>
            </DialogTitle>
            <DialogContent
                classes={{
                    root: classes.content
                }}
            >
                <TextField
                    classes={{ container: classes.textField }}
                    fullWidth
                    onChange={handleInputChange}
                    value={query}
                    variant="flat"
                    placeholder="Burrito, development, etc..."
                />
                <Results query={query} debouncedQuery={debouncedQuery} onSelect={onSelect} classes={classes} />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose as any}>
                    <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const Results: React.FC<{
    query: string;
    debouncedQuery: string;
    onSelect: (payload: GiphySearchResult & { query: string }) => any;
    classes: any;
}> = ({ query, debouncedQuery, onSelect, classes }) => {
    const { gifs, loading: loadingResults } = useGiphyResults(debouncedQuery, 0, 3 * 3);

    const loading = useMemo(() => loadingResults || (query && query !== debouncedQuery), [
        query,
        debouncedQuery,
        loadingResults
    ]);

    const handleClick = useCallback(
        (result: GiphySearchResult) => () => {
            if (typeof onSelect !== 'function') {
                return;
            }
            onSelect({ ...result, query });
        },
        [onSelect, query]
    );

    return (
        <div className={classes.results}>
            {loading && <LoadingSpinner />}
            {!loading &&
                gifs &&
                debouncedQuery &&
                gifs.map((payload) => (
                    <Tooltip key={`giphy_item_${payload.id}`} title="Select this gif">
                        <button
                            key={`result_${payload.id}`}
                            type="button"
                            className={classes.imageContainer}
                            onClick={handleClick(payload)}
                        >
                            <img className={classes.image} src={payload.url} alt={payload.title} />
                            {payload.user && <GifAuthorCredits user={payload.user} />}
                        </button>
                    </Tooltip>
                ))}
        </div>
    );
};

export const SearchGifsDialog = SearchGifsDialogComponent;
