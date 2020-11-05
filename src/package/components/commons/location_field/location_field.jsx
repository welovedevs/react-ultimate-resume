import React, { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';

import { List, ListItem, PopperCard, TextField, Typography } from '@welovedevs/ui';

import { useGoogleMapsPredictions } from '../../hooks/location/use_google_maps_predictions';

import { styles } from './location_field_style';
import { translations } from './location_field_translations';

const useStyles = createUseStyles(styles);

const LocationFieldComponent = ({ variant, onLocationSelected, value, clearOnSelect, onChange, fullWidth }) => {
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

    const handleChange = useCallback(
        (event) => {
            setInput(event.target.value);
            if (typeof onChange === 'function') {
                event.persist();
                onChange(event);
            }
        },
        [onChange, onLocationSelected]
    );

    const onPredictionSelected = useCallback(
        (placeId, description) => {
            if (typeof onLocationSelected === 'function') {
                onLocationSelected({ name: description, placeId, locale });
            }
            setIsFocused(false);
            setInput('');
        },
        [locale, onLocationSelected]
    );

    return (
        <>
            <TextField
                fullWidth={fullWidth}
                className={classes.input}
                onClick={(e) => e.target && e.target.select && e.target.select()}
                value={input}
                onChange={handleChange}
                placeholder={formatMessage(translations.placeholder)}
                onBlur={() => {
                    if (!preventBlur) {
                        setIsFocused(false);
                    }
                }}
                onFocus={() => setIsFocused(true)}
                variant={variant || 'outlined'}
                label={formatMessage(translations.title)}
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
        </>
    );
};

const PredictionsList = ({ predictions = [], setPreventBlur, input, onPredictionSelected, classes, setInput }) => {
    const onMouseUp = useCallback(() => {
        setPreventBlur(false);
        if (input && input.focus) {
            input.focus();
        }
    }, []);
    return (
        <PopperCard
            open
            anchorElement={input}
            classes={{
                popper: classes.popperCard
            }}
        >
            <List>
                {predictions
                    .filter((item) => item)
                    .map(({ description, place_id: placeId }) => (
                        <ListItem
                            key={`prediction_${placeId}`}
                            onMouseDown={() => setPreventBlur(true)}
                            onMouseUp={onMouseUp}
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
const StubLocationField = ({ variant, onLocationSelected, value, clearOnSelect, onChange, fullWidth }) => {
    const { formatMessage } = useIntl();
    const [input, setInput] = useState(value);

    useEffect(() => {
        setInput(value);
    }, [value]);

    const handleChange = useCallback(
        (e) => {
            setInput(e.target.value);
            if (typeof onChange === 'function') {
                e.persist();
                onChange(e);
            }
        },
        [onChange]
    );
    const onKeyDown = useCallback(
        (e) => {
            if (e.keyCode === 13) {
                onLocationSelected({ name: input });
                if (clearOnSelect) {
                    setInput('');
                }
            }
        },
        [onLocationSelected, input]
    );
    return (
        <TextField
            variant={variant || 'outlined'}
            value={input}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            placeholder={formatMessage(translations.stubPlaceholder)}
            clearOnSelect={clearOnSelect}
            fullWidth={fullWidth}
        />
    );
};

export const LocationField = ({
    variant,
    onLocationSelected,
    value,
    clearOnSelect,
    onChange,
    fullWidth,
    classes: receivedClasses = {}
}) => {
    const { ready } = useGoogleMapsPredictions();
    const classes = useStyles();

    if (!ready) {
        return (
            <div className={cn(classes.container, receivedClasses.container)}>
                <StubLocationField
                    variant={variant}
                    onLocationSelected={onLocationSelected}
                    value={value}
                    clearOnSelect={clearOnSelect}
                    onChange={onChange}
                    fullWidth={fullWidth}
                    classes={classes}
                />
            </div>
        );
    }
    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            <LocationFieldComponent
                variant={variant}
                onLocationSelected={onLocationSelected}
                value={value}
                clearOnSelect={clearOnSelect}
                onChange={onChange}
                fullWidth={fullWidth}
                classes={classes}
            />
        </div>
    );
};
