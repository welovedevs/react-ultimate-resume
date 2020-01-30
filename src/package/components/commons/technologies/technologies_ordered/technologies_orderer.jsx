import React, { useCallback, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from './technologies_orderer_styles';
import { Button, Card, List, ListItem, Tooltip, Typography } from '@wld/ui';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { FormattedMessage, useIntl } from 'react-intl';
import cn from 'classnames';
import { ReactComponent as TrashIcon } from '../../../../assets/icons/trash.svg';
import { ReactComponent as MoveIcon } from '../../../../assets/icons/move_list.svg';
import { useTechnologies } from '../../../hooks/technologies/use_technologies';
import { SliderWithPopper } from '../../slider_with_popper/slider_with_popper';

const useStyles = createUseStyles(styles);

const DragHandle = SortableHandle(({ classes }) => <MoveIcon className={classes.dragHandle} />);

const TechologyRow = SortableElement(({ item, onRemove, onChange, classes, technologyIndex: index }) => {
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
            return 'https://process.filestackapi.com/output=format:png/resize=width:48/compress/' + technology.handle;
        }
        return technology.url;
    }, [technologies, item]);
    return (
        <ListItem className={cn(classes.listItem)}>
            <DragHandle {...{ classes }} />
            <Card className={classes.logoWrapper}>
                <img src={imgUrl} className={classes.logo} />
            </Card>
            <div className={classes.textWrapper}>
                <Typography className={classes.technologyName}>{item.name}</Typography>
                <SliderWithPopper
                    color="primary"
                    name={`skill_value_${item.id}`}
                    value={item.value}
                    onChange={sliderChange}
                    min={0}
                    max={100}
                    debounce={50}
                />
            </div>
            <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Supprimer" />}>
                <Button className={classes.button} onClick={() => onRemove(item.id)}>
                    <TrashIcon className={classes.trash} />
                </Button>
            </Tooltip>
        </ListItem>
    );
});

const SortableTechnologiesItems = SortableContainer(
    ({ items, onDelete, onItemChange, schools, classes, className }) => (
        <List className={className}>
            {items.map((item, index) => (
                <TechologyRow
                    key={`technologies_orderer_${item.id}`}
                    onRemove={onDelete}
                    id={item.id}
                    onChange={onItemChange}
                    technologyIndex={index}
                    {...{
                        index,
                        item,
                        schools,
                        classes
                    }}
                />
            ))}
        </List>
    )
);
export const TechnologiesOrderer = ({ items, onChange, onDelete, className, onItemChange }) => {
    const classes = useStyles();
    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            onChange(arrayMove(items, oldIndex, newIndex).map((data, index) => ({ ...data, index })));
        },
        [items, onChange]
    );

    return (
        <SortableTechnologiesItems
            helperClass={cn(classes.sortableHelper)}
            className={className}
            items={items}
            onSortEnd={move}
            distance={20}
            useDragHandle
            lockAxis="y"
            name="education"
            onItemChange={onItemChange}
            onDelete={onDelete}
            {...{ classes }}
        />
    );
};
