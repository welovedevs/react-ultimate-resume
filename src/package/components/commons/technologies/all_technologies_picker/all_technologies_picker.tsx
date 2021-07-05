import React, { useCallback, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { FormattedMessage } from 'react-intl';
import { AnimatePresence, motion } from 'framer-motion';

import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import { Card, TextField, Typography } from '@welovedevs/ui';

import {
    ALL_TECHNOLOGIES_TRANSITIONS_PROPS,
    SELECTED_ITEM_LAYER_TRANSITIONS_PROPS
} from './all_technologies_picker_props';

import { CheckboxField } from '../../checkbox_field/checkbox_group';

import { Classes, styles } from './all_technologies_picker_styles';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../utils/framer_motion/common_types/spring_type';
import { last } from '../../../../utils/array_utils';
import { DevTechnology, Technology } from '../technologies/technology';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const TechnologyItem = ({
    item,
    selectedItems = [],
    onAdd,
    onDelete
}: {
    selectedItems: Array<DevTechnology>;
    item: Technology;
    onAdd: (name: string) => void;
    onDelete: (id: string) => void;
}) => {
    const classes = useStyles();

    const selectedItem = useMemo(() => selectedItems.find(({ name }) => name === item.name), [selectedItems, item]);

    const onClick = useCallback(() => {
        if (!selectedItem) {
            onAdd(item.name);
            return;
        }
        onDelete(selectedItem.id);
    }, [selectedItem, onAdd, onDelete]);

    const imgUrl = useMemo(() => {
        const handle = last(item?.url?.split('/'));
        return `https://process.filestackapi.com/auto_image/${item?.handle ?? handle ?? '4A5N89okRPW50jRcmkuM'}`;
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

interface Props {
    technologies: DevTechnology[];
    onDelete: (id: string) => void;
    classes?: Classes;
    onAdd: (name: string) => void;
    selectedItems: Array<DevTechnology>;
}

export const AllTechnologiesPicker = ({
    technologies,
    selectedItems,
    onAdd,
    onDelete,
    classes: receivedClasses = {}
}: Props) => {
    const isMobile = useMediaQuery(`(max-width: 500px)`);
    const classes = useStyles({ classes: receivedClasses });
    const [onlySelected, setOnlySelected] = useState<boolean>();

    const [query, setQuery] = useState<string>('');
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
                ),
        [technologies, debouncedQuery, onlySelected]
    );

    const handleTextFieldChange = useCallback((event) => setQuery(event.target.value), []);

    const toggleOtherPerk = useCallback(() => {
        setOnlySelected(!onlySelected);
    }, [onlySelected]);

    return (
        <div className={classes.container}>
            <TextField
                classes={{
                    container: classes.textField
                }}
                fullWidth={isMobile}
                variant="flat"
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
            <div className={classes.technologiesList}>
                {displayedItems.map((item, index) => (
                    <motion.div key={`technology_${item?.name}`} variants={ALL_TECHNOLOGIES_TRANSITIONS_PROPS}>
                        <TechnologyItem
                            key={`technology_${item.name}_${index}`}
                            selectedItems={selectedItems}
                            item={item}
                            onAdd={onAdd}
                            onDelete={onDelete}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
