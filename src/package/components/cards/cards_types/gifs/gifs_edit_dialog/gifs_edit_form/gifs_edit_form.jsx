import React, { useCallback, useContext, useMemo, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { useFormikContext } from 'formik';
import keyBy from 'lodash.keyby';

import omit from 'lodash.omit';
import uuid from 'uuid/v4';
import { arrayMove } from 'react-sortable-hoc';

import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import { Typography } from '@welovedevs/ui';

import { SearchGifsDialog } from '../../../../../commons/search_gif_dialog/search_gifs_dialog';
import { AddButtonDashed } from '../../../../../commons/add_button_dashed/add_button_dashed';
import { GifsSortableCards } from './gifs_sortable_cards/gifs_sortable_cards';

import { styles } from './gifs_edit_form_styles';
import { StaticDataContext } from '../../../../../../utils/context/contexts';
import { URLFallbackDialog } from '../../../../../commons/url_fallback_dialog.jsx/url_fallback_dialog';

const useStyles = createUseStyles(styles);

const GifsEditFormComponent = ({ helpers: { handleValueChange } }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
    const classes = useStyles();
    const {
        values: { interests },
        errors: validationErrors
    } = useFormikContext();

    const { apiKeys } = useContext(StaticDataContext);
    const hasGiphyKey = useMemo(() => !!apiKeys.giphy, [apiKeys.giphy]);

    const [selectedIndex, setSelectedIndex] = useState(null);
    const removeSelectedIndex = useCallback(() => setSelectedIndex(null), []);

    const { interests: errors } = validationErrors || {};

    const keyedValues = useMemo(() => keyBy(interests, ({ id }) => id), [JSON.stringify(interests)]);

    const interestChanged = useCallback((interestIndex, field, value) => {
        handleValueChange(`interests[${interestIndex}].${field}`)(value);
    }, []);

    const interestDeleted = useCallback(
        (id) => {
            handleValueChange('interests')(Object.values(omit(keyedValues, id)));
        },
        [JSON.stringify(keyedValues), JSON.stringify(interests)]
    );

    const addInterest = useCallback(() => {
        const id = uuid();
        handleValueChange('interests')(
            interests.concat({
                index: interests.length,
                id
            })
        );

        setSelectedIndex(interests.length);
    }, [JSON.stringify(interests)]);

    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('interests')(
                arrayMove(interests, oldIndex, newIndex).map((data, index) => ({ ...data, index }))
            );
        },
        [interests]
    );

    const globalError = typeof errors === 'string' && errors;

    const handleGifSelection = useCallback(
        ({ url, user, query }) => {
            interestChanged(selectedIndex, 'name', query);
            interestChanged(selectedIndex, 'gifUrl', url);
            interestChanged(selectedIndex, 'gifUser', user);
            removeSelectedIndex();
        },
        [interestChanged, selectedIndex]
    );
    const handleGifChange = useCallback(
        (url) => {
            interestChanged(selectedIndex, 'gifUrl', url);
        },
        [interestChanged, selectedIndex]
    );

    return (
        <>
            {hasGiphyKey && (
                <SearchGifsDialog
                    open={Boolean(selectedIndex !== null)}
                    onClose={removeSelectedIndex}
                    onSelect={handleGifSelection}
                />
            )}
            {!hasGiphyKey && (
                <URLFallbackDialog
                    open={Boolean(selectedIndex !== null)}
                    onClose={removeSelectedIndex}
                    onChange={handleGifChange}
                />
            )}
            {globalError && (
                <Typography color="danger" variant="h4" component="h4">
                    {globalError}
                </Typography>
            )}
            {isMobile && (
                <AddButtonDashed
                    classes={{
                        container: classes.addButtonDashed
                    }}
                    onClick={addInterest}
                />
            )}
            <GifsSortableCards
                items={interests}
                interestDeleted={interestDeleted}
                interestChanged={interestChanged}
                errors={errors}
                onSortEnd={move}
                setSelectedIndex={setSelectedIndex}
            />
            {!isMobile && (
                <AddButtonDashed
                    classes={{
                        container: classes.addButtonDashed
                    }}
                    onClick={addInterest}
                />
            )}
        </>
    );
};

export const GifsEditForm = GifsEditFormComponent;
