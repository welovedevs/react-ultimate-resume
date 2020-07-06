import React, { useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { useTransition } from 'react-spring';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import { Tag, Tooltip, Typography } from '@welovedevs/ui';

import { LocationField } from '../../../../../commons/location_field/location_field';
import { EditDialogField } from '../../../../../commons/edit_dialog_field/edit_dialog_field';

import { LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS } from './location_places_field_transitions_spring_props';

import { ReactComponent as TrashIcon } from '../../../../../../assets/icons/trash.svg';

import { styles } from './location_places_field_styles';

import { ReactComponent as MoveIcon } from '../../../../../../assets/icons/move.svg';

const useStyles = createUseStyles(styles);
const DragHandle = SortableHandle(({ classes }) => (
    <button className={classes.dragHandleButton} type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));
const SortableTag = SortableElement(({ onRemove, item, style }) => {
    const classes = useStyles();

    return (
        <Tag
            className={classes.place}
            color="secondary"
            style={{
                opacity: style.opacity,
                transform: style.scale.to((value) => `scale3d(${value}, ${value}, ${value})`)
            }}
        >
            <DragHandle classes={classes} />
            <Tooltip
                title={<FormattedMessage id="DreamJob.editDialog.location.delete" defaultMessage="Delete this place" />}
            >
                <button type="button" onClick={onRemove}>
                    <TrashIcon className={classes.deleteIcon} />
                </button>
            </Tooltip>
            <Typography variant="body2" color="light">
                {item.name}
            </Typography>
        </Tag>
    );
});
const SortableTags = SortableContainer(({ onRemove, items }) => {
    const classes = useStyles();

    const transitions = useTransition(items, ({ id }) => `place_${id}`, {
        ...LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS,
        ...(items?.length && {
            trail: 500 / items.length
        })
    });
    return (
        <div className={classes.places}>
            {transitions.map(
                ({ item, key, props }, index) =>
                    item && (
                        <SortableTag index={index} key={key} item={item} style={props} onRemove={onRemove(item.id)} />
                    )
            )}
        </div>
    );
});
const LocationPlacesFieldComponent = ({ error, places, addPlace, removePlace, onChange }) => {
    const classes = useStyles();
    const placesValues = useMemo(() => Object.values(places || {}), [places]);

    const onMove = useCallback(
        ({ oldIndex, newIndex }) => {
            onChange(arrayMove(placesValues, oldIndex, newIndex));
        },
        [placesValues, onChange]
    );

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
                clearOnSelect
                variant="flat"
                onLocationSelected={addPlace}
            />
            <SortableTags
                lockToContainerEdges
                axis="xy"
                helperClass={classes.sortableHelper}
                items={placesValues}
                onRemove={removePlace}
                distance={15}
                // onSortStart={handleSortStart}
                onSortEnd={onMove}
                classes={classes}
            />
        </EditDialogField>
    );
};

export const LocationPlacesField = LocationPlacesFieldComponent;
