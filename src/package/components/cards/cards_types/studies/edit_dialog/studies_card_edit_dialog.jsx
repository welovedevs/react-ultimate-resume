import React, { memo, useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';

import { Twemoji } from 'react-emoji-render';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { useFormikContext } from 'formik';
import keyBy from 'lodash.keyby';
import range from 'lodash.range';
import moment from 'moment';
import uuid from 'uuid/v4';

import { List, ListItem, TextField, Tooltip, Typography } from '@welovedevs/ui';

import { MenuItem, useMediaQuery } from '@material-ui/core';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';

import { Select } from '../../../../commons/select/select';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/trash.svg';
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/keyboard_arrow_down.svg';

import { AddButton } from '../../../../commons/add_button/add_button';

import { translations } from './studies_translations';
import { styles } from './studies_styles';
import { STUDIES_CONTENT_TRANSITION_PROPS } from './studies_edit_dialog_props';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../utils/framer_motion/common_types/spring_type';

const DragHandle = SortableHandle(({ classes }) => (
    <button className={classes.dragHandleButton} type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));
const useStyles = createUseStyles(styles);

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

const FormationItem = SortableElement(
    ({ id, formation, onChange, onRemove, error: fieldErrors, folded, toggleFold, classes, formationIndex: index }) => {
        const theme = useTheme();
        const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

        const { formatMessage } = useIntl();

        const handleInstitutionChange = useCallback((event) => onChange(index, 'institution', event.target.value), [
            index
        ]);
        const handleStudyType = useCallback((event) => onChange(index, 'studyType', event.target.value), [index]);
        const handleAreaChange = useCallback((event) => onChange(index, 'area', event.target.value), [index]);
        const handleEndDate = useCallback((value) => onChange(index, 'endDate', moment({ year: value })), [index]);

        const hasError = Boolean(fieldErrors);

        return (
            <div className={classes.study}>
                <div className={classes.itemContainer}>
                    <div className={classes.header}>
                        <DragHandle classes={classes} />
                        <div className={classes.divider} />
                        <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Delete" />}>
                            <button className={classes.removeButton} type="button" onClick={onRemove(id)}>
                                <DeleteIcon className={classes.removeIcon} />
                            </button>
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
                            {hasError && <Twemoji className={classes.warningIcon} svg text="⚠️" />}
                            <Typography className={classes.smallTitle} color="dark">
                                {formation.institution}
                            </Typography>
                        </ListItem>
                    </div>
                    <AnimatePresence>
                        {!folded && (
                            <motion.div
                                variants={STUDIES_CONTENT_TRANSITION_PROPS}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={spring}
                                className={cn(classes.listItem, fieldErrors && classes.listItemError)}
                            >
                                <div className={classes.fieldGroup}>
                                    <div className={classes.field}>
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
                                        <SelectComponent
                                            onChange={handleEndDate}
                                            id={formation.id}
                                            value={formation.endDate}
                                            classes={classes}
                                        />
                                        {fieldErrors && fieldErrors.endDate && (
                                            <Typography color="danger" variant="helper" component="p">
                                                {fieldErrors.endDate}
                                            </Typography>
                                        )}
                                    </div>
                                </div>
                                <div className={classes.fieldGroup}>
                                    <div className={classes.field}>
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        );
    }
);

const SortableFormationsItems = SortableContainer(
    ({ items, formationChanged, formationDeleted, errors, name, schools, classes }) => {
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
            </List>
        );
    }
);

export const FormationsEditForm = ({ data, onMove, onAdd, onFieldChange, onDelete, errors }) => {
    const classes = useStyles();
    const globalError = typeof errors === 'string' && errors;

    return (
        <>
            <SortableFormationsItems
                lockToContainerEdges
                helperClass={classes.sortableHelper}
                items={data}
                onSortEnd={onMove}
                distance={20}
                useDragHandle
                lockAxis="y"
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
