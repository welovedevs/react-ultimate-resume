import { useTechnologies } from '../../../hooks/technologies/use_technologies';
import React, { useCallback, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from './technologies_picker_styles';
import { Typography, Card, TextField } from '@wld/ui';
import cn from 'classnames';
const useStyles = createUseStyles(styles);

const TechnologyItem = ({ item, classes, selectedItems = [], onAdd, onDelete }) => {
    const selectedItem = useMemo(() => selectedItems.find(({ name }) => name === item.name), [selectedItems, item]);

    const onClick = useCallback(() => {
        console.log({ selectedItem });
        if (!selectedItem) {
            onAdd(item.name);
            return;
        }
        onDelete(selectedItem.id);
    }, [selectedItem, onAdd, onDelete]);

    const imgUrl = useMemo(() => {
        if (item.handle) {
            return 'https://process.filestackapi.com/output=format:png/resize=width:48/compress/' + item.handle;
        }
        return item.url;
    }, [item]);
    return (
        <div className={classes.technologyItem} onClick={onClick}>
            <Card className={classes.technologyLogoWrapper}>
                <img src={imgUrl} className={classes.technologyLogo} />
                {selectedItem && <span className={classes.selectedTechnologyStub}>{selectedItem.index + 1}</span>}
            </Card>
            <Typography variant="tag" className={classes.itemName}>
                {item.name}
            </Typography>
        </div>
    );
};
export const TechnologiesPicker = ({ selectedItems, onAdd, onDelete, className }) => {
    const classes = useStyles();
    const { technologies } = useTechnologies();
    const [filter, setFilter] = useState('');
    const displayedItems = useMemo(
        () =>
            Object.values(technologies ?? {})
                .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
                .slice(0, 36),
        [technologies, filter]
    );
    const setFilterValue = useCallback(e => setFilter(e.target.value), []);
    return (
        <div className={cn(classes.container, className)}>
            <TextField className={classes.textField} value={filter} onChange={setFilterValue} />
            <div className={classes.technologiesList}>
                {displayedItems.map((item, index) => (
                    <TechnologyItem
                        selectedItems={selectedItems}
                        classes={classes}
                        key={`technology_${item.name}_${index}`}
                        item={item}
                        onAdd={onAdd}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};
