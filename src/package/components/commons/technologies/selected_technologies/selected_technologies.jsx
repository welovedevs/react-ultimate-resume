import React, { useCallback, useMemo } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import { Card, List, Tooltip, Typography } from '@wld/ui';

import { SliderWithPopper } from '../../slider_with_popper/slider_with_popper';

import { ReactComponent as DeleteIcon } from '../../../../assets/icons/trash.svg';
import { ReactComponent as MoveIcon } from '../../../../assets/icons/move_list.svg';

import { useTechnologies } from '../../../hooks/technologies/use_technologies';

import { styles } from './selected_technologies_styles';

const useStyles = createUseStyles(styles);

const TechnologyRow = SortableElement(({ item, onRemove, onChange, classes, itemsLength, technologyIndex }) => {
    const { technologies } = useTechnologies();

    const sliderChange = useCallback(
        e => {
            onChange({ ...item, value: Number(e.target.value) });
        },
        [item, onChange]
    );
    const imgUrl = useMemo(() => {
        const technology = technologies?.[item.name];
        if (!technology) {
            return null;
        }
        if (technology.handle) {
            return `https://process.filestackapi.com/${technology.handle}`;
        }
        return technology.url;
    }, [technologies, item]);

    return (
        <li className={classes.listItem} style={{ zIndex: itemsLength - technologyIndex }}>
            <DragHandle classes={classes} />
            <div className={classes.divider} />
            <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Delete" />}>
                <button className={classes.removeButton} type="button" onClick={() => onRemove(item.id)}>
                    <DeleteIcon className={classes.removeIcon} />
                </button>
            </Tooltip>
            <div className={classes.divider} />
            <Card className={classes.logo}>
                <img className={classes.logoImage} alt={item.name} src={imgUrl} />
            </Card>
            <div className={classes.textWrapper}>
                <Typography color="dark" variant="label">
                    {item.name}
                </Typography>
                <div className={classes.sliderValueContainer}>
                    <Typography
                        customClasses={{
                            container: classes.sliderValue
                        }}
                        color="dark"
                        variant="label"
                    >
                        <FormattedMessage
                            id="Skills.Dialog.SliderValue"
                            defaultMessage="{valueNode}%"
                            values={{ valueNode: <span className={classes.bolden}>{item.value}</span> }}
                        />
                    </Typography>
                    <SliderWithPopper
                        color="primary"
                        name={`skill_value_${item.id}`}
                        value={item.value}
                        onChange={sliderChange}
                        min={0}
                        max={100}
                        debounce={50}
                        classes={{ container: classes.slider }}
                        popperCardProps={{
                            customClasses: {
                                popper: classes.popper
                            }
                        }}
                    />
                </div>
            </div>
        </li>
    );
});

const SortableTechnologies = SortableContainer(
    ({ items, onDelete, onItemChange, schools, classes, className, receivedClasses, itemsLength }) => (
        <List className={cn(classes.container, className, receivedClasses.container)}>
            {items.map((item, index) => (
                <TechnologyRow
                    key={`selected_technology_row_${item.id}`}
                    onRemove={onDelete}
                    id={item.id}
                    onChange={onItemChange}
                    technologyIndex={index}
                    index={index}
                    item={item}
                    schools={schools}
                    receivedClasses={receivedClasses}
                    classes={classes}
                    itemsLength={itemsLength}
                />
            ))}
        </List>
    )
);

const DragHandle = SortableHandle(({ classes }) => (
    <button className={classes.dragHandleButton} type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));

const SelectedTechnologiesComponent = ({
    items,
    onChange,
    onDelete,
    className,
    onItemChange,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles();
    const itemsLength = useMemo(() => items.length, [items]);

    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            onChange(arrayMove(items, oldIndex, newIndex).map((data, index) => ({ ...data, index })));
        },
        [items, onChange]
    );

    return (
        <SortableTechnologies
            lockToContainerEdges
            className={className}
            helperClass={classes.sortableHelper}
            items={items}
            onSortEnd={move}
            distance={20}
            useDragHandle
            lockAxis="y"
            name="education"
            onItemChange={onItemChange}
            onDelete={onDelete}
            receivedClasses={receivedClasses}
            itemsLength={itemsLength}
            classes={classes}
        />
    );
};

export const SelectedTechnologies = SelectedTechnologiesComponent;
