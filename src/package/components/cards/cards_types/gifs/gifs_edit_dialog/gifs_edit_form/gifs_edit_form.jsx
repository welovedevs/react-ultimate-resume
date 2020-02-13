import React, { useCallback, useMemo, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { useFormikContext } from 'formik';
import keyBy from 'lodash/keyBy';
import omit from 'lodash/omit';
import uuid from 'uuid/v4';
import { arrayMove } from 'react-sortable-hoc';

import { Typography } from '@wld/ui';

import { SearchGifsDialog } from '../../../../../commons/search_gif_dialog/search_gifs_dialog';
import { AddButtonDashed } from '../../../../../commons/add_button_dashed/add_button_dashed';
import { GifsSortableCards } from './gifs_sortable_cards/gifs_sortable_cards';

import { styles } from './gifs_edit_form_styles';

const useStyles = createUseStyles(styles);

const GifsEditFormComponent = ({ helpers: { handleValueChange } }) => {
    const classes = useStyles();
    const {
        values: { interests },
        errors: validationErrors
    } = useFormikContext();

    const [selectedIndex, setSelectedIndex] = useState(null);
    const removeSelectedIndex = useCallback(() => setSelectedIndex(null), []);

    const { interests: errors } = validationErrors || {};

    const keyedValues = useMemo(() => keyBy(interests, ({ id }) => id), [interests]);

    const interestChanged = useCallback((interestIndex, field, value) => {
        handleValueChange(`interests[${interestIndex}].${field}`)(value);
    }, []);

    const interestDeleted = useCallback(
        id => {
            console.log({ id });
            console.log({ keyedValues });
            handleValueChange('interests')(Object.values(omit(keyedValues, id)));
        },
        [JSON.stringify(keyedValues)]
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

    const handleGifChange = useCallback(value => () => interestChanged(selectedIndex, 'gifUrl', value), [
        selectedIndex
    ]);

    const handleGifSelection = useCallback(({ url }) => {
        handleGifChange(url)();
        removeSelectedIndex();
    }, [handleGifChange]);

    return (
        <>
            <SearchGifsDialog
                open={Boolean(selectedIndex !== null)}
                onClose={removeSelectedIndex}
                onSelect={handleGifSelection}
            />
            {globalError && (
                <Typography
                    color="danger"
                    variant="h4"
                    component="h4"
                >
                    {globalError}
                </Typography>
            )}
            <GifsSortableCards
                items={interests}
                interestDeleted={interestDeleted}
                interestChanged={interestChanged}
                errors={errors}
                onSortEnd={move}
                setSelectedIndex={setSelectedIndex}
            />
            <AddButtonDashed
                classes={{
                    container: classes.addButtonDashed
                }}
                onClick={addInterest}
            />
        </>
    );
};

export const GifsEditForm = GifsEditFormComponent;
