import { List, Typography } from '@wld/ui';

import cloneDeep from 'lodash/cloneDeep';
import { FormattedMessage } from 'react-intl';
import React, { memo, useCallback } from 'react';
import { styles } from './cards_orderer_styles';
import { createUseStyles } from 'react-jss';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import { CardStub } from '../card_stub/card_stub';
import { DEFAULT_CARD_ORDER } from '../../../../cards/utils/cards_order';

const useStyles = createUseStyles(styles);

const SortableCard = SortableElement(memo(CardStub));
const SortableCards = SortableContainer(({ items = [], onItemChanged }) => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.cardsContainer}>
            {items.map((item, index) => (
                <SortableCard
                    onItemChanged={onItemChanged}
                    index={index}
                    cardIndex={index}
                    className={classes.sortableCard}
                    key={`card_orderer_${index}_${item.type}`}
                    data={item}
                />
            ))}
        </List>
    );
});
export const CardsOrderer = ({ onChange, value: cardsOrder = DEFAULT_CARD_ORDER }) => {
    const classes = useStyles();
    const onMove = useCallback(
        ({ oldIndex, newIndex }) => {
            onChange(arrayMove(cloneDeep(cardsOrder), oldIndex, newIndex));
        },
        [cardsOrder]
    );
    const onItemChanged = useCallback(
        (index, value) => {
            console.log({ index, value });
            const newValue = cloneDeep(cardsOrder);
            newValue[index] = value;
            onChange(newValue);
        },
        [cardsOrder]
    );

    return (
        <div>
            <Typography customClasses={{ container: classes.title }} component="h3" variant="h4" color="dark">
                <FormattedMessage id={'CardsOrderer.field.title'} defaultMessage={'Order your profile cards'} />
            </Typography>
            <SortableCards
                lockToContainerEdges
                axis="xy"
                helperClass={classes.sortableHelper}
                onSortEnd={onMove}
                items={cardsOrder}
                onItemChanged={onItemChanged}
                distance={15}
                classes={classes}
            />
        </div>
    );
};
