import React, { createContext, memo, useCallback, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import cloneDeep from 'lodash/cloneDeep';

import { List } from '@wld/ui';

import { CardStub } from '../card_stub/card_stub';
import { DEFAULT_CARD_ORDER } from '../../../../cards/utils/cards_order';

import { styles } from './cards_orderer_styles';

const useStyles = createUseStyles(styles);

const SortableCard = SortableElement(memo(CardStub));

export const Context = createContext({});

const CardsOrdererComponent = ({ onChange, value: cardsOrder = DEFAULT_CARD_ORDER }) => {
    const classes = useStyles();
    const [isSorting, setIsSorting] = useState(false);
    const onMove = useCallback(
        ({ oldIndex, newIndex }) => {
            setIsSorting(false);
            onChange(arrayMove(cloneDeep(cardsOrder), oldIndex, newIndex));
        },
        [cardsOrder, onChange]
    );
    const onItemChanged = useCallback(
        (index, value) => {
            const newValue = cloneDeep(cardsOrder);
            newValue[index] = value;
            onChange(newValue);
        },
        [cardsOrder, onChange]
    );

    const handleSortStart = useCallback(() => setIsSorting(true), []);

    return (
        <div className={classes.container}>
            <Context.Provider value={{ isSorting }}>
                <SortableCards
                    lockToContainerEdges
                    axis="xy"
                    helperClass={classes.sortableHelper}
                    items={cardsOrder}
                    onItemChanged={onItemChanged}
                    distance={15}
                    onSortStart={handleSortStart}
                    onSortEnd={onMove}
                    classes={classes}
                />
            </Context.Provider>
        </div>
    );
};

const SortableCards = SortableContainer(({ items = [], onItemChanged }) => {
    const classes = useStyles();

    return (
        <List className={classes.cardsContainer}>
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

export const CardsOrderer = CardsOrdererComponent;
