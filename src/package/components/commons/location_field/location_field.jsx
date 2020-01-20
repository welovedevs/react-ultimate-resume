import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { TextField, PopperCard, Typography, List, ListItem } from '@wld/ui';
import { useGoogleMapsPredictions } from '../../hooks/location/use_google_maps_predictions';

import { locationFieldStyles } from './location_field_style';
import { createUseStyles } from 'react-jss';
import { locationFieldTranslations } from './location_field_translations';

const useStyles = createUseStyles(locationFieldStyles);

const LocationField = ({ variant, onLocationSelected, value, clearOnSelect }) => {
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
                    onChange={e => e.target && setInput(e.target.value)}
                    placeholder={formatMessage(locationFieldTranslations.placeholder)}
                    onBlur={() => {
                        if (!preventBlur) {
                            setIsFocused(false);
                        }
                    }}
                    onFocus={() => {
                        return setIsFocused(true);
                    }}
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

const PredictionsList = ({ predictions = [], setPreventBlur, input, onPredictionSelected, classes, setInput }) => {
    return (
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
};

export default LocationField;
