import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import { FormattedMessage } from 'react-intl';
import { GifCard } from '../gif_card/gif_card';
import { BouncingRoundButton } from '../../../../../../commons/bouncing_round_button/bouncing_round_button';

import { ReactComponent as MoveIcon } from '../../../../../../../assets/icons/move.svg';

import { styles } from './gifs_sortable_cards_styles';

const useStyles = createUseStyles(styles);

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
            useDragHandle
            axis="xy"
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

const SortableGifsCards = SortableContainer(
    ({ items = [], interestDeleted, interestChanged, errors, setSelectedIndex, classes }) => (
        <ul className={classes.list}>
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
        </ul>
    )
);

const DragHandle = SortableHandle(() => (
    <BouncingRoundButton
        title={<FormattedMessage id="GifsEditDialog.gifCard.dragGif" defaultMessage="Hold me to drag this card!" />}
        icon={MoveIcon}
        tooltipPlacement="bottom"
    />
));

const SortableGifItem = SortableElement(
    ({ id, interest, onChange, onRemove, error: fieldErrors, interestIndex: index, setSelectedIndex, classes }) => {
        const handleRemove = useCallback(() => onRemove(id), [id, onRemove]);
        const handleChange = useCallback((field) => (value) => onChange(index, field, value), [onChange]);
        const handleImageEditClick = useCallback(() => setSelectedIndex(index), []);
        return (
            <li className={classes.listItem}>
                <GifCard
                    imageEditable
                    gifUrl={interest?.gifUrl}
                    name={interest?.name}
                    onChange={handleChange}
                    onRemove={handleRemove}
                    onImageEditClick={handleImageEditClick}
                    error={fieldErrors}
                    additionalActions={<DragHandle />}
                />
            </li>
        );
    }
);

export const GifsSortableCards = GifsSortableCardsComponent;
