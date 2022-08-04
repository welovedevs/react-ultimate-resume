import React, { memo, useCallback, useState } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import cloneDeep from 'lodash/cloneDeep';

import { List } from '@welovedevs/ui';
import { Context } from '../card_stub/card_stub';

import { CardStub } from '../card_stub/card_stub';
import { DEFAULT_CARD_ORDER } from '../../../../cards/utils/cards_order';

import { styles } from './cards_orderer_styles';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

const useStyles = makeStyles(styles);

const SortableCard = CardStub;

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

    const handleSortStart = useCallback(() => {
        setIsSorting(true);
    }, []);

    return (
        <div className={classes.container}>
            <Context.Provider value={{ isSorting }}>
                <SortableCards
                    items={cardsOrder}
                    onItemChanged={onItemChanged}
                    handleSortStart={handleSortStart}
                    onSortEnd={onMove}
                    classes={classes}
                />
            </Context.Provider>
        </div>
    );
};

const SortableCards = ({ items = [], onItemChanged, handleSortStart, onSortEnd }) => {
    const classes = useStyles();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

  const handleDragEnd = useCallback((event) => {
    const {active, over} = event;

    if (active.id !== over.id) {
      const oldItem = items.find(({type}) => type === active.id);
      const newItem = items.find(({type}) => type === over.id);
      const oldIndex = oldItem && items.indexOf(oldItem);
      const newIndex = newItem && items.indexOf(newItem);
      return onSortEnd({oldIndex, newIndex});
    }
  }, [items]);

    return (
        <List className={classes.cardsContainer}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleSortStart} onDragEnd={handleDragEnd}>
                <SortableContext items={items.map((item) => ({ ...item, id: item.type }))}>
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
                </SortableContext>
            </DndContext>
        </List>
    );
};

export const CardsOrderer = CardsOrdererComponent;
