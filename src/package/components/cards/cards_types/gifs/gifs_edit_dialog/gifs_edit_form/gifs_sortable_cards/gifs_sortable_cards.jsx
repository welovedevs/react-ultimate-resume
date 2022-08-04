import React, { useCallback } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { FormattedMessage } from 'react-intl';
import { GifCard } from '../gif_card/gif_card';
import { BouncingRoundButton } from '../../../../../../commons/bouncing_round_button/bouncing_round_button';

import { ReactComponent as MoveIcon } from '../../../../../../../assets/icons/move.svg';

import { styles } from './gifs_sortable_cards_styles';

const useStyles = makeStyles(styles);

const GifsSortableCardsComponent = ({
    items = [],
    interestDeleted,
    interestChanged,
    errors,
    setSelectedIndex,
    onSortEnd
}) => {
    const classes = useStyles();
    return (
        <SortableGifsCards
            items={items}
            interestDeleted={interestDeleted}
            interestChanged={interestChanged}
            errors={errors}
            setSelectedIndex={setSelectedIndex}
            onSortEnd={onSortEnd}
            classes={classes}
        />
    );
};

const SortableGifsCards = ({
    items = [],
    interestDeleted,
    interestChanged,
    errors,
    setSelectedIndex,
    classes,
    onSortEnd
}) => {
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
        <ul className={classes.list}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items}>
                    {items
                        .filter(Boolean)
                        .sort(({ index: a }, { index: b }) => a - b)
                        .map((interest, index) => (
                            <SortableGifItem
                                index={index}
                                key={`interest_${interest.id}_${index}`}
                                onChange={interestChanged}
                                onRemove={interestDeleted}
                                setSelectedIndex={setSelectedIndex}
                                id={interest.id}
                                interest={interest}
                                error={errors?.[index]}
                                interestIndex={index}
                                classes={classes}
                            />
                        ))}
                </SortableContext>
            </DndContext>
        </ul>
    );
};

const SortableGifItem = ({
    id,
    interest,
    onChange,
    onRemove,
    error: fieldErrors,
    interestIndex: index,
    setSelectedIndex,
    classes
}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const handleRemove = useCallback(() => onRemove(id), [id, onRemove]);
    const handleChange = useCallback((field) => (value) => onChange(index, field, value), [onChange]);
    const handleImageEditClick = useCallback(() => setSelectedIndex(index), []);
    return (
        <li className={classes.listItem} style={style} ref={setNodeRef}>
            <GifCard
                imageEditable
                gifUrl={interest?.gifUrl}
                gifUser={interest?.gifUser}
                name={interest?.name}
                onChange={handleChange}
                onRemove={handleRemove}
                onImageEditClick={handleImageEditClick}
                error={fieldErrors}
                additionalActions={
                    <BouncingRoundButton
                        title={
                            <FormattedMessage
                                id="GifsEditDialog.gifCard.dragGif"
                                defaultMessage="Hold me to drag this card!"
                            />
                        }
                        icon={MoveIcon}
                        tooltipPlacement="bottom"
                        {...attributes}
                        {...listeners}
                    />
                }
            />
        </li>
    );
};
export const GifsSortableCards = GifsSortableCardsComponent;
