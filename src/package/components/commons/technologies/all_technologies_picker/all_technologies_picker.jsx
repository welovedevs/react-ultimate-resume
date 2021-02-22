import React, { useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { useDebounce } from 'use-debounce';
import { FormattedMessage } from 'react-intl';
import { AnimatePresence, motion } from 'framer-motion';

import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import { Card, TextField, Typography } from '@welovedevs/ui';

import { useTechnologies } from '../../../hooks/technologies/use_technologies';

import {
    ALL_TECHNOLOGIES_TRANSITIONS_PROPS,
    SELECTED_ITEM_LAYER_TRANSITIONS_PROPS,
    TECHNOLOGIES_CONTAINER_TRANSITION_PROPS
} from './all_technologies_picker_props';

import { CheckboxField } from '../../checkbox_field/checkbox_group';

import { styles } from './all_technologies_picker_styles';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../utils/framer_motion/common_types/spring_type';

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

    return (
        <button className={classes.technologyItem} type="button" onClick={onClick}>
            <Card
                classes={{
                    container: classes.technologyImageContainer
                }}
            >
                <img src={imgUrl} alt={item.name} className={classes.technologyImage} />
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            key={`selected_item_layer_${selectedItem?.name}`}
                            className={classes.selectedTechnologyLayer}
                            variants={SELECTED_ITEM_LAYER_TRANSITIONS_PROPS}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={spring}
                        >
                            <Typography color="light" variant="h3">
                                {selectedItem?.index + 1}
                            </Typography>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
            <Typography
                classes={{
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
                    [...(tags ?? []), name].some((value) => value.toLowerCase().includes(debouncedQuery.toLowerCase()))
                )
                .slice(0, 35),
        [technologies, debouncedQuery, onlySelected]
    );

    const handleTextFieldChange = useCallback((event) => setQuery(event.target.value), []);

    const toggleOtherPerk = useCallback(() => {
        setOnlySelected(!onlySelected);
    }, [onlySelected]);

    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            <TextField
                classes={{
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
            <AnimatePresence>
                <motion.div
                    variants={TECHNOLOGIES_CONTAINER_TRANSITION_PROPS}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={spring}
                    className={cn(classes.technologiesList, receivedClasses.technologiesList)}
                >
                    {displayedItems.map((item, index) => (
                        <motion.div key={`technology_${item?.name}`} variants={ALL_TECHNOLOGIES_TRANSITIONS_PROPS}>
                            <TechnologyItem
                                key={`technology_${item.name}_${index}`}
                                selectedItems={selectedItems}
                                item={item}
                                onAdd={onAdd}
                                onDelete={onDelete}
                                classes={classes}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export const AllTechnologiesPicker = AllTechnologiesPickerComponent;
