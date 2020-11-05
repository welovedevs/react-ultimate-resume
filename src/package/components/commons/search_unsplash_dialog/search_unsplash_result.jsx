import React, { useCallback, useContext, useEffect, useState } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { useDebounce } from 'use-debounce';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { Button, TextField, Tooltip } from '@welovedevs/ui';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';
import { LoadingSpinner } from '../loading_spinner/loading_spinner';
import { StaticDataContext } from '../../../utils/context/contexts';

import { useUnsplashResults } from '../../hooks/unsplash/use_unsplash_results';

import { styles } from './search_unsplash_result_styles';

const useStyles = createUseStyles(styles);

const SearchUnsplashDialogComponent = ({ open, onClose, onSelect }) => {
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
            <DialogTitle classes={{ root: classes.title }}>
                <FormattedMessage id="Unsplash.SearchDialog.Title" defaultMessage="Search pictures from unsplash" />
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
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const Results = ({ query, debouncedQuery, onSelect, classes }) => {
    const { results, loading: loadingResults } = useUnsplashResults(debouncedQuery, 0, 3 * 3);
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
    const { endpoints } = useContext(StaticDataContext);

    useEffect(() => {
        if (loadingResults) {
            return;
        }
        setShowLoadingSpinner(!!query);
    }, [query]);

    useEffect(() => {
        if (loadingResults === true) {
            return;
        }
        setShowLoadingSpinner(false);
    }, [results, loadingResults]);

    const onImageSelected = useCallback(
        ({ description, urls, id, user, links }) => () => {
            onSelect({
                id,
                url: urls.regular,
                alt: description,
                credits: {
                    url: encodeURI(`${user.links.html}?utm_source=W3D Developer Profile&utm_medium=referral`),
                    name: user.username
                },
                fromUnsplash: true
            });
            // eslint-disable-next-line no-undef
            fetch(`${endpoints?.unsplashProxy}?url=${links.download_location}`);
        },
        [onSelect]
    );

    return (
        <div className={classes.results}>
            {showLoadingSpinner && <LoadingSpinner />}
            {!showLoadingSpinner &&
                results?.map(({ id, urls, description, user, links }) => (
                    <Tooltip key={`unsplash_picture_${id}`} title="Select this picture">
                        <button
                            key={`result_${id}`}
                            type="button"
                            className={classes.imageContainer}
                            onClick={onImageSelected({ description, urls, id, user, links })}
                        >
                            <img className={classes.image} src={urls.regular} alt={description} />
                        </button>
                    </Tooltip>
                ))}
        </div>
    );
};

export const SearchUnsplashDialog = SearchUnsplashDialogComponent;
