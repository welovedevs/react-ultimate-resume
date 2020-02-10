import React, { useCallback, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { useDebounce } from 'use-debounce';
import { animated, useChain, useTransition } from 'react-spring';

import { Typography, Card, TextField } from '@wld/ui';

import { useTechnologies } from '../../../hooks/technologies/use_technologies';

import {
    ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS,
    SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS
} from './all_technologies_picker_spring_props';

import { styles } from './all_technologies_picker_styles';

const useStyles = createUseStyles(styles);

const TechnologyItem = ({ item, classes, selectedItems = [], onAdd, onDelete }) => {
    const selectedItem = useMemo(() =>
        selectedItems.find(({ name }) => name === item.name),
        [selectedItems, item]);

    const onClick = useCallback(() => {
        if (!selectedItem) {
            onAdd(item.name);
            return;
        }
        onDelete(selectedItem.id);
    }, [selectedItem, onAdd, onDelete]);

    const imgUrl = useMemo(() => {
        if (item.handle) {
            return `https://process.filestackapi.com/${item.handle}`;
        }
        return item.url;
    }, [item]);

    const selectedItemLayerTransitions = useTransition(selectedItem, selected => `selected_item_layer_${selected?.name}`, SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS);

    return (
        <button
            className={classes.technologyItem}
            type="button"
            onClick={onClick}
        >
            <Card
                customClasses={{
                    container: classes.technologyImageContainer
                }}
            >
                <img src={imgUrl} alt={item.name} className={classes.technologyImage} />
                {selectedItemLayerTransitions.map(({ item: selected, key, props }) => selected && (
                    <animated.div
                        key={key}
                        className={classes.selectedTechnologyLayer}
                        style={props}
                    >
                        <Typography
                            color="light"
                            variant="h3"
                        >
                            {selected.index + 1}
                        </Typography>
                    </animated.div>
                ))}
            </Card>
            <Typography
                customClasses={{
                    container: classes.typography
                }}
            >
                {item.name}
            </Typography>
        </button>
    );
};

const AllTechnologiesPickerComponent = ({ selectedItems, onAdd, onDelete, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    const animationEnded = useRef(false);
    const animationReference = useRef();

    const { technologies } = useTechnologies();
    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebounce(query, 200);

    const displayedItems = useMemo(
        () =>
            Object.values(technologies ?? {})
                .filter(({ name, tags }) => [...(tags ?? []), name]
                    .some(value => value.toLowerCase().includes(debouncedQuery.toLowerCase())))
                .slice(0, 35),
        [technologies, debouncedQuery]
    );

    const handleTextFieldChange = useCallback((event) => setQuery(event.target.value), []);

    const displayedItemsTransitions = useTransition(!animationEnded.current ? displayedItems : null, item => `technology_${item?.name}`, ({
        ...ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS,
        trail: 1250 / displayedItems.length,
        onRest: async () => {
            await new Promise((resolve) => setTimeout(resolve, 200));
            animationEnded.current = true;
        },
        ref: animationReference
    }));

    useChain([animationReference], [0.35, 0]);

    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            <TextField
                customClasses={{
                    container: classes.textField
                }}
                variant="outlined"
                value={query}
                onChange={handleTextFieldChange}
                placeholder="Mobile, Javascript, etc..."
            />
            <div className={cn(classes.technologiesList, receivedClasses.technologiesList)}>
                {(animationEnded.current ? displayedItems : displayedItemsTransitions).map((values, index) => {
                    const item = animationEnded.current ? values : values.item;
                    const technologyItem = (
                        <TechnologyItem
                            key={`technology_${item.name}_${index}`}
                            selectedItems={selectedItems}
                            item={item}
                            onAdd={onAdd}
                            onDelete={onDelete}
                            classes={classes}
                        />
                    );
                    if (!animationEnded.current) {
                        const { key, props } = values;
                        return (
                            <animated.div
                                key={key}
                                style={props}
                            >
                                {technologyItem}
                            </animated.div>
                        );
                    }
                    return technologyItem;
                })}
            </div>
        </div>
    );
};

export const AllTechnologiesPicker = AllTechnologiesPickerComponent;
