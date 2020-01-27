import React, { useCallback, useEffect, useRef, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';

import { TextField, PopperCard, Typography, List, ListItem } from '@wld/ui';

import { useGoogleMapsPredictions } from '../../hooks/location/use_google_maps_predictions';

import { locationFieldStyles } from './location_field_style';
import { locationFieldTranslations } from './location_field_translations';

const useStyles = createUseStyles(locationFieldStyles);

const LocationFieldComponent = ({ variant, onLocationSelected, value, clearOnSelect, onChange }) => {
    const classes = useStyles();
    const { locale, formatMessage } = useIntl();
    const inputRef = useRef();
    const [input, setInput] = useState(value);
    const [preventBlur, setPreventBlur] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const { predictions } = useGoogleMapsPredictions(input);

    useEffect(() => {
        setInput(value);
    }, [value]);

    const clear = useCallback(() => setInput(''), []);

    const handleChange = useCallback(e => {
        setInput(e.target.value);
        if (typeof onChange === 'function') {
            e.persist();
            onChange(e);
        }
        if (typeof onLocationSelected === 'function' && !e.target.value) {
            onLocationSelected(null);
        }
    });
    const onPredictionSelected = useCallback(
        (placeId, description) => {
            if (typeof onLocationSelected === 'function') {
                onLocationSelected({ name: description, placeId, locale });
            }
            setIsFocused(false);
        },
        [locale, onLocationSelected]
    );

    return (
        <div className={classes.container}>
            <div style={{ position: 'relative' }}>
                <TextField
                    className={classes.input}
                    onClick={e => e.target && e.target.select && e.target.select()}
                    value={input}
                    onChange={handleChange}
                    placeholder={formatMessage(locationFieldTranslations.placeholder)}
                    onBlur={() => {
                        if (!preventBlur) {
                            setIsFocused(false);
                        }
                    }}
                    onFocus={() => setIsFocused(true)}
                    variant={variant || 'outlined'}
                    label={formatMessage(locationFieldTranslations.title)}
                    containerRef={inputRef}
                />
                {isFocused && (
                    <PredictionsList
                        setPreventBlur={setPreventBlur}
                        input={inputRef.current}
                        {...{
                            predictions,
                            classes,
                            onPredictionSelected,
                            locale,
                            setIsFocused,
                            setInput,
                            clear,
                            clearOnSelect
                        }}
                    />
                )}
            </div>
        </div>
    );
};

const PredictionsList = ({ predictions = [], setPreventBlur, input, onPredictionSelected, classes, setInput }) => (
    <PopperCard
        open
        anchorElement={input}
        customClasses={{
            popper: classes.popperCard
        }}
    >
        <List className={classes.popperList}>
            {predictions
                .filter(item => item)
                .map(({ description, place_id: placeId }) => (
                    <ListItem
                        key={`prediction_${placeId}`}
                        onMouseDown={() => setPreventBlur(true)}
                        onMouseUp={() => {
                            setPreventBlur(false);
                            input && input.focus();
                        }}
                        onClick={() => {
                            if (!placeId) {
                                return;
                            }
                            setInput(description);
                            onPredictionSelected(placeId, description);
                        }}
                    >
                        <Typography>{description || ''}</Typography>
                    </ListItem>
                ))}
        </List>
    </PopperCard>
);

export const LocationField = LocationFieldComponent;
