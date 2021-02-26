import React, { useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

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
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../../utils/framer_motion/common_types/spring_type';
import { AnimatePresence, motion } from 'framer-motion';

const useStyles = createUseStyles(styles);
const DragHandle = SortableHandle(({ classes }) => (
    <button className={classes.dragHandleButton} type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));
const SortableTag = SortableElement(({ onRemove, item, motionConfig }) => {
    const classes = useStyles();

    return (
        <Tag
            key={`${item.id}_${item.name}`}
            component={motion.div}
            classes={{ container: classes.place }}
            color="secondary"
            {...motionConfig}
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

    return (
        <motion.div
            variants={LOCATION_PLACES_LIST_TRANSITION_PROPS}
            initial="initial"
            animate="animate"
            exit="exit"
            className={classes.places}
        >
            <AnimatePresence>
                {items.map(
                    (item, index) =>
                        item && (
                            <SortableTag
                                index={index}
                                key={`place_${item.id}`}
                                item={item}
                                motionConfig={{
                                    variants: LOCATION_PLACES_FIELD_TRANSITIONS_PROPS,
                                    transition: spring
                                }}
                                onRemove={onRemove(item.id)}
                            />
                        )
                )}
            </AnimatePresence>
        </motion.div>
    );
});
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
