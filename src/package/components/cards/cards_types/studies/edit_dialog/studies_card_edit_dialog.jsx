import React, { memo, useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import { useTheme } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';

import { FormattedMessage, useIntl } from 'react-intl';

import { Twemoji } from 'react-emoji-render';

import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { useFormikContext } from 'formik';
import keyBy from 'lodash/keyBy';
import range from 'lodash/range';
import moment from 'moment';
import uuid from 'uuid/v4';

import { Button, List, ListItem, TextField, Tooltip, Typography } from '@welovedevs/ui';

import { MenuItem, useMediaQuery } from '@mui/material';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';

import { Select } from '../../../../commons/select/select';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/trash.svg';
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/keyboard_arrow_down.svg';

import { AddButton } from '../../../../commons/add_button/add_button';

import { translations } from './studies_translations';
import { styles } from './studies_styles';
import { AnimatePresence, motion } from 'framer-motion';

const useStyles = makeStyles(styles);

const StudiesCardEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            classes={{
                paper: classes.paper
            }}
            open={open}
            onClose={onClose}
            data={data}
            isEditing={isEditing}
            onEdit={onEdit}
            validationSchema={validationSchemaToPass}
            title={<FormattedMessage id="Studies.editDialog.title" defaultMessage="Your studies" />}
        >
            {(helpers) => <FormationsEditFormWrapper helpers={helpers} />}
        </EditDialog>
    );
};

const FormationsEditFormWrapper = ({ helpers: { handleValueChange } }) => {
    const {
        values: { education },
        errors: validationErrors
    } = useFormikContext();

    const errors = validationErrors?.education;

    const formationChanged = useCallback((educationsIndex, field, value) => {
        handleValueChange(`education[${educationsIndex}].${field}`)(value);
    }, []);
    const formationDeleted = useCallback(
        (deletedId) => () => {
            handleValueChange('education')(education.filter(({ id }) => deletedId !== id));
        },
        [JSON.stringify(education)]
    );

    const formationAdded = useCallback(() => {
        const id = uuid();
        return handleValueChange('education')([
            ...education,
            {
                position: education.length,
                id
            }
        ]);
    }, [JSON.stringify(education)]);
    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('education')(arrayMove(education, oldIndex, newIndex));
        },
        [JSON.stringify(education)]
    );

    return (
        <FormationsEditForm
            data={education}
            onMove={move}
            onAdd={formationAdded}
            onFieldChange={formationChanged}
            onDelete={formationDeleted}
            errors={errors}
        />
    );
};

const SelectComponent = memo(({ value, onChange, classes, id }) => {
    const selectYearItems = useMemo(
        () =>
            range(1980, moment().year() + 8)
                .sort((a, b) => b - a)
                .map((year) => (
                    <MenuItem key={`formation_year_${id}_${year}`} value={year}>
                        {year}
                    </MenuItem>
                )),
        []
    );

    return (
        <Select
            textFieldProps={{
                fullWidth: true,
                variant: 'flat'
            }}
            value={moment.isMoment(value) ? value.year() : null}
            onChange={onChange}
            textFieldIconProps={{ className: classes.selectIcon }}
        >
            {selectYearItems}
        </Select>
    );
});

const FormationItem = ({
    id,
    formation,
    onChange,
    onRemove,
    error: fieldErrors,
    folded,
    toggleFold,
    classes,
    formationIndex: index
}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

    const { formatMessage } = useIntl();

    const handleInstitutionChange = useCallback((event) => onChange(index, 'institution', event.target.value), [index]);
    const handleStudyType = useCallback((event) => onChange(index, 'studyType', event.target.value), [index]);
    const handleAreaChange = useCallback((event) => onChange(index, 'area', event.target.value), [index]);
    const handleEndDate = useCallback((event) => onChange(index, 'endDate', Number(event.target.value)), [index]);

    const hasError = Boolean(fieldErrors);

    return (
        <div className={classes.study} style={style} ref={setNodeRef}>
            <div className={'flex flex-col mb-1'}>
                <div className={'flex items-center'}>
                    <button className={classes.dragHandleButton} type="button" {...attributes} {...listeners}>
                        <MoveIcon className={classes.dragHandle} />
                    </button>
                    <div className={classes.divider} />
                    <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Delete" />}>
                        <Button className="m-0" color="danger" type="button" size="xs" onClick={onRemove(id)}>
                            <DeleteIcon className="fill-current" />
                        </Button>
                    </Tooltip>
                    {!isMobile && <div className={classes.divider} />}
                    <ListItem
                        button
                        className={cn(classes.listItem, hasError && classes.listItemError)}
                        onClick={() => toggleFold(!folded)}
                    >
                        <motion.div
                            className={classes.arrowContainer}
                            animate={{
                                transform: `rotate(${folded ? -90 : 0}deg)`
                            }}
                        >
                            <ArrowIcon className={cn('refinement-arrow')} />
                        </motion.div>
                        {hasError && (
                            <Twemoji
                                options={{ baseUrl: '//cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/' }}
                                className={classes.warningIcon}
                                svg
                                text="⚠️"
                            />
                        )}
                        <Typography className={classes.smallTitle} color="dark">
                            {formation.institution}
                        </Typography>
                    </ListItem>
                </div>
                {!folded && (
                    <div className={'flex items-stretch my-1'}>
                        <div className={'w-[1px] bg-dark-50 mx-2'} />
                        <div className={cn(classes.listItem, fieldErrors && classes.listItemError)}>
                            <div className={classes.fieldGroup}>
                                <div className={classes.field}>
                                    <Typography component="p" color="dark" variant="label">
                                        {formatMessage(translations.schoolName)}
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        variant="flat"
                                        value={formation.institution}
                                        onChange={handleInstitutionChange}
                                        id={`formation_institution_${id}`}
                                        placeholder={formatMessage(translations.schoolNamePlaceholder)}
                                    />
                                    {fieldErrors && fieldErrors.institution && (
                                        <Typography color="danger" variant="helper" component="p">
                                            {fieldErrors.institution}
                                        </Typography>
                                    )}
                                </div>
                                <div className={classes.field}>
                                    <Typography component="p" color="dark" variant="label">
                                        {formatMessage(translations.diplomaDate)}
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        variant="flat"
                                        min={1970}
                                        max={2100}
                                        value={formation.endDate}
                                        type="number"
                                        onChange={handleEndDate}
                                        id={`formation_institution_${id}`}
                                        placeholder={formatMessage(translations.endYearPlaceholder)}
                                    />
                                    {/*<SelectComponent*/}
                                    {/*    onChange={handleEndDate}*/}
                                    {/*    id={formation.id}*/}
                                    {/*    value={formation.endDate}*/}
                                    {/*    classes={classes}*/}
                                    {/*/>*/}
                                    {fieldErrors && fieldErrors.endDate && (
                                        <Typography color="danger" variant="helper" component="p">
                                            {fieldErrors.endDate}
                                        </Typography>
                                    )}
                                </div>
                            </div>
                            <div className={classes.fieldGroup}>
                                <div className={classes.field}>
                                    <Typography component="p" color="dark" variant="label">
                                        {formatMessage(translations.diplomaTitle)}
                                    </Typography>
                                    <TextField
                                        id={`formation_diploma_${id}`}
                                        fullWidth
                                        variant="flat"
                                        label={formatMessage(translations.diplomaTitle)}
                                        placeholder={formatMessage(translations.diplomaPlaceholder)}
                                        value={formation.studyType}
                                        onChange={handleStudyType}
                                        margin="normal"
                                        error={fieldErrors && fieldErrors.studyType}
                                    />

                                    {fieldErrors && fieldErrors.studyType && (
                                        <Typography color="danger" variant="helper" component="p">
                                            {fieldErrors.studyType}
                                        </Typography>
                                    )}
                                </div>
                                <div className={classes.field}>
                                    <Typography component="p" color="dark" variant="label">
                                        {formatMessage(translations.mainCourse)}
                                    </Typography>
                                    <TextField
                                        id={`formation_area_${id}`}
                                        fullWidth
                                        variant="flat"
                                        label={formatMessage(translations.mainCourse)}
                                        placeholder={formatMessage(translations.mainCoursePlaceholder)}
                                        value={formation.area}
                                        onChange={handleAreaChange}
                                        margin="normal"
                                        error={fieldErrors && fieldErrors.area}
                                    />

                                    {fieldErrors && fieldErrors.area && (
                                        <Typography color="danger" variant="helper" component="p">
                                            {fieldErrors.area}
                                        </Typography>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const SortableFormationsItems = ({
    items,
    formationChanged,
    formationDeleted,
    errors,
    name,
    schools,
    classes,
    onSortEnd
}) => {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = useCallback(
        (event) => {
            const { active, over } = event;

            if (active.id !== over.id) {
                const oldItem = items.find(({ id }) => id === active.id);
                const newItem = items.find(({ id }) => id === over.id);
                const oldIndex = oldItem && items.indexOf(oldItem);
                const newIndex = newItem && items.indexOf(newItem);
                return onSortEnd({ oldIndex, newIndex });
            }
        },
        [items]
    );

    const keyedValues = useMemo(() => keyBy(items, ({ id }) => id), [items]);

    const [foldedState, setFoldState] = useState(
        Object.keys(keyedValues || {}).reduce((state, id) => {
            // eslint-disable-next-line no-param-reassign
            state[id] = true;
            return state;
        }, {})
    );

    const toggleFold = useCallback(
        (id) => (value) => {
            const newFoldState = { ...foldedState };
            newFoldState[id] = value;
            setFoldState(newFoldState);
        },
        [foldedState]
    );
    return (
        <List>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    {items.map((formation, index) => (
                        <FormationItem
                            key={`${name}_${formation.id}_${index}`}
                            onChange={formationChanged}
                            onRemove={formationDeleted}
                            id={formation.id}
                            formationIndex={index}
                            error={errors && errors[index]}
                            toggleFold={toggleFold(formation.id)}
                            folded={foldedState[formation.id]}
                            {...{
                                index,
                                formation,
                                schools,
                                classes
                            }}
                        />
                    ))}
                </SortableContext>
            </DndContext>
        </List>
    );
};
export const FormationsEditForm = ({ data, onMove, onAdd, onFieldChange, onDelete, errors }) => {
    const classes = useStyles();
    const globalError = typeof errors === 'string' && errors;

    return (
        <>
            <SortableFormationsItems
                items={data}
                onSortEnd={onMove}
                name="education"
                formationChanged={onFieldChange}
                formationDeleted={onDelete}
                errors={errors}
                {...{ classes }}
            />
            <AddButton onClick={onAdd} />
            {globalError && (
                <Typography color="danger" component="p">
                    {errors}
                </Typography>
            )}
        </>
    );
};

export const StudiesCardEditDialog = StudiesCardEditDialogComponent;
