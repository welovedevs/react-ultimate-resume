import React, { useCallback, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { useDebounce } from 'use-debounce';
import { FormattedMessage } from 'react-intl';
import { animated, useChain, useTransition } from 'react-spring';

import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import { Card, TextField, Typography } from '@wld/ui';

import { useTechnologies } from '../../../hooks/technologies/use_technologies';

import {
    ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS,
    SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS
} from './all_technologies_picker_spring_props';

import { CheckboxField } from '../../checkbox_field/checkbox_group';

import { styles } from './all_technologies_picker_styles';

const useStyles = createUseStyles(styles);

const TechnologyItem = ({ item, classes, selectedItems = [], onAdd, onDelete }) => {
    const selectedItem = useMemo(() => selectedItems.find(({ name }) => name === item.name), [selectedItems, item]);

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

    const selectedItemLayerTransitions = useTransition(
        selectedItem,
        selected => `selected_item_layer_${selected?.name}`,
        SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS
    );

    return (
        <button className={classes.technologyItem} type="button" onClick={onClick}>
            <Card
                customClasses={{
                    container: classes.technologyImageContainer
                }}
            >
                <img src={imgUrl} alt={item.name} className={classes.technologyImage} />
                {selectedItemLayerTransitions.map(
                    ({ item: selected, key, props }) =>
                        selected && (
                            <animated.div key={key} className={classes.selectedTechnologyLayer} style={props}>
                                <Typography color="light" variant="h3">
                                    {selected.index + 1}
                                </Typography>
                            </animated.div>
                        )
                )}
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
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
    const classes = useStyles();
    const animationEnded = useRef(false);
    const animationReference = useRef();
    const [onlySelected, setOnlySelected] = useState();

    const { technologies } = useTechnologies();
    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebounce(query, 200);

    const displayedItems = useMemo(
        () =>
            Object.values(technologies ?? {})
                .filter(({ name }) => {
                    if (!onlySelected) {
                        return true;
                    }
                    return selectedItems.some(({ name: selectedName }) => selectedName === name);
                })
                .filter(({ name, tags }) =>
                    [...(tags ?? []), name].some(value => value.toLowerCase().includes(debouncedQuery.toLowerCase())))
                .slice(0, 35),
        [technologies, debouncedQuery, onlySelected]
    );

    const handleTextFieldChange = useCallback(event => setQuery(event.target.value), []);

    const displayedItemsTransitions = useTransition(
        !animationEnded.current ? displayedItems : null,
        item => `technology_${item?.name}`,
        {
            ...ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS,
            trail: 1250 / displayedItems.length,
            onRest: async () => {
                await new Promise(resolve => setTimeout(resolve, 200));
                animationEnded.current = true;
            },
            ref: animationReference
        }
    );

    useChain([animationReference], [0.35, 0]);

    const toggleOtherPerk = useCallback(() => {
        setOnlySelected(!onlySelected);
    }, [onlySelected]);

    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            <TextField
                customClasses={{
                    container: classes.textField
                }}
                fullWidth={isMobile}
                variant="outlined"
                value={query}
                onChange={handleTextFieldChange}
                placeholder="Mobile, Javascript, etc..."
            />
            {isMobile && (
                <CheckboxField
                    title={
                        <Typography>
                            <FormattedMessage id="Skills.EditDialog.onlySelected" defaultMessage="Only selected" />
                        </Typography>
                    }
                    onClick={toggleOtherPerk}
                    checked={onlySelected}
                    variant="outlined"
                    color="secondary"
                />
            )}
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
                            <animated.div key={key} style={props}>
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
