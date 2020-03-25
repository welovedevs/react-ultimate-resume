import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { useTransition } from 'react-spring';

import { Tag, Tooltip, Typography } from '@wld/ui';

import { LocationField } from '../../../../../commons/location_field/location_field';
import { EditDialogField } from '../../../../../commons/edit_dialog_field/edit_dialog_field';

import { LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS } from './location_places_field_transitions_spring_props';

import { ReactComponent as TrashIcon } from '../../../../../../assets/icons/trash.svg';

import { styles } from './location_places_field_styles';

const useStyles = createUseStyles(styles);

const LocationPlacesFieldComponent = ({ error, places, addPlace, removePlace }) => {
    const classes = useStyles();
    const placesValues = useMemo(() => Object.values(places || {}), [places]);
    const transitions = useTransition(placesValues, ({ id }) => `place_${id}`, {
        ...LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS,
        ...(placesValues?.length && {
            trail: 500 / placesValues.length
        })
    });
    return (
        <EditDialogField
            error={error}
            title={
                <FormattedMessage
                    id="DreamJob.editDialog.location.title"
                    defaultMessage="What's your dream job location?"
                />
            }
        >
            <LocationField
                fullWidth
                classes={{
                    container: classes.locationField
                }}
                variant="flat"
                onLocationSelected={addPlace}
            />
            <div className={classes.places}>
                {transitions.map(
                    ({ item, key, props }) =>
                        item && (
                            <Tag
                                key={key}
                                className={classes.place}
                                color="secondary"
                                style={{
                                    opacity: props.opacity,
                                    transform: props.scale.to(value => `scale3d(${value}, ${value}, ${value})`)
                                }}
                            >
                                <Tooltip title="Delete this place">
                                    <button type="button" onClick={removePlace(item.id)}>
                                        <TrashIcon className={classes.deleteIcon} />
                                    </button>
                                </Tooltip>
                                <Typography variant="body2" color="light">
                                    {item.name}
                                </Typography>
                            </Tag>
                        )
                )}
            </div>
        </EditDialogField>
    );
};

export const LocationPlacesField = LocationPlacesFieldComponent;
