import React, { useCallback, useMemo } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { FormattedMessage } from 'react-intl';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Tag, Tooltip, Typography } from '@welovedevs/ui';

import { LocationField } from '../../../../../commons/location_field/location_field';
import { EditDialogField } from '../../../../../commons/edit_dialog_field/edit_dialog_field';

import {
    LOCATION_PLACES_FIELD_TRANSITIONS_PROPS,
    LOCATION_PLACES_LIST_TRANSITION_PROPS
} from './location_places_field_transitions_props';

import { ReactComponent as TrashIcon } from '../../../../../../assets/icons/trash.svg';

import { styles } from './location_places_field_styles';

import { ReactComponent as MoveIcon } from '../../../../../../assets/icons/move.svg';

const useStyles = makeStyles(styles);

const SortableTag = ({ onRemove, item }) => {
    const classes = useStyles();
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <Tag
            ref={setNodeRef}
            style={style}
            key={`${item.id}_${item.name}`}
            size="xs"
            classes={{ container: `${classes.place} m-1` }}
            color="primary"
        >
            <button {...attributes} {...listeners} className={classes.dragHandleButton} type="button">
                <MoveIcon className={classes.dragHandle} />
            </button>
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
};

const SortableTags = ({ onRemove, items, onSortEnd }) => {
    const classes = useStyles();
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = useCallback(
        (event) => {
            const { active, over } = event;

            if (active.id !== over.id) {
                const oldItem = items.find(({ id }) => id === active.id);
                const newItem = items.find(({ id }) => id === over.id);
                const oldIndex = oldItem && items.indexOf(oldItem);
                const newIndex = newItem && items.indexOf(newItem);
                return onSortEnd({ oldIndex, newIndex });
            }
        },
        [items]
    );

    return (
        <div className={classes.places}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items}>
                    {items.map(
                        (item, index) =>
                            item && (
                                <SortableTag
                                    index={index}
                                    key={`place_${item.id}`}
                                    item={item}
                                    onRemove={onRemove(item.id)}
                                />
                            )
                    )}
                </SortableContext>
            </DndContext>
        </div>
    );
};
const LocationPlacesFieldComponent = ({ error, places, addPlace, removePlace, onChange }) => {
    const classes = useStyles();
    const placesValues = useMemo(() => Object.values(places || {}), [places]);

    const onMove = useCallback(
        ({ oldIndex, newIndex }) => {
            onChange(arrayMove(placesValues, oldIndex, newIndex).map((item, index) => ({ ...item, index })));
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
