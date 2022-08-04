import React, { useCallback, useMemo } from 'react';

import cn from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import uuid from 'uuid/v4';

import { List, TextField, Tooltip, Typography } from '@welovedevs/ui';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useFormikContext } from 'formik';
import { useTheme } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { AddButton } from '../../../../commons/add_button/add_button';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as TrashIcon } from '../../../../../assets/icons/trash.svg';

import translations from './languages_edit_dialog_translations';
import { styles } from './languages_edit_dialog_styles';

const useStyles = makeStyles(styles);

const LanguagesCardEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            open={open}
            onClose={onClose}
            data={data}
            isEditing={isEditing}
            onEdit={onEdit}
            validationSchema={validationSchemaToPass}
            title={<FormattedMessage id="Languages.editDialog.title" defaultMessage="Your languages" />}
        >
            {(helpers) => <LanguagesEditFormWrapper helpers={helpers} />}
        </EditDialog>
    );
};

const LanguageItem = ({ id, language, onChange, onRemove, error: fieldErrors, classes, languageIndex: index }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const { formatMessage } = useIntl();
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

    const handleLanguageChange = useCallback((e) => onChange(index, 'language', e.target.value), [index]);
    const handleValueChange = useCallback((e) => onChange(index, 'value', Number(e.target.value)), [index]);

    return (
        <div className={classes.itemContainer} ref={setNodeRef} style={style}>
            <div className={classes.actions}>
                <button type="button" {...attributes} {...listeners}>
                    <MoveIcon className={classes.dragHandle} />
                </button>

                <div className={classes.divider} />
                <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Delete" />}>
                    <button type="button" className={classes.button} onClick={onRemove(id)}>
                        <TrashIcon className={classes.removeIcon} />
                    </button>
                </Tooltip>
                {!isMobile && <div className={classes.divider} />}
            </div>
            <div className={classes.listItem}>
                <div className={classes.fieldGroup}>
                    <div className={classes.field}>
                        <Typography color="dark" variant="label">
                            {formatMessage(translations.language)}
                        </Typography>
                        <TextField
                            value={language.language}
                            onChange={handleLanguageChange}
                            id={`language_language_${id}`}
                            placeholder={formatMessage(translations.languagePlaceholder)}
                            variant="flat"
                        />
                        {fieldErrors && fieldErrors.language && (
                            <Typography color="danger" variant="helper" component="p">
                                {fieldErrors.language}
                            </Typography>
                        )}
                    </div>
                    <div className={cn(classes.field, classes.sliderValueContainer)}>
                        <Typography
                            classes={{
                                container: classes.sliderValue
                            }}
                            color="dark"
                            variant="label"
                        >
                            {formatMessage(translations.level, {
                                valueNode: <span className={classes.bolden}>{language.value}</span>
                            })}
                        </Typography>
                        <SliderWithPopper
                            color="primary"
                            name="value"
                            value={language.value}
                            onChange={handleValueChange}
                            min={0}
                            max={100}
                            className={classes.slider}
                            popperCardProps={{
                                classes: {
                                    container: classes.sliderPopperCard,
                                    arrowContainer: classes.sliderPopperCardArrowContainer
                                }
                            }}
                        />
                        {fieldErrors && fieldErrors.value && (
                            <Typography color="danger" variant="helper" component="p">
                                {fieldErrors.value}
                            </Typography>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SortableLanguagesItems = ({ items, onChange, onSortEnd, onDelete, errors, name, schools, classes }) => {
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

    return (
        <List>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    {items?.map((language, index) => (
                        <LanguageItem
                            key={`${name}_${language.id}_${index}`}
                            onChange={onChange}
                            onRemove={onDelete}
                            id={language.id}
                            languageIndex={index}
                            error={errors && errors[index]}
                            {...{
                                index,
                                language,
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

export const LanguagesEditForm = ({ data, onMove, onValueChange, onDelete, onAdd, errors: validationErrors }) => {
    const classes = useStyles();
    const globalError = typeof validationErrors === 'string' && validationErrors;

    return (
        <>
            <SortableLanguagesItems
                items={data}
                onSortEnd={onMove}
                name="education"
                onChange={onValueChange}
                onDelete={onDelete}
                errors={validationErrors}
                {...{ classes }}
            />
            <AddButton onClick={onAdd} />
            {globalError && (
                <Typography color="danger" component="p">
                    {validationErrors}
                </Typography>
            )}
        </>
    );
};

const LanguagesEditFormWrapper = ({ helpers: { handleValueChange } }) => {
    const {
        values: { languages },
        errors: validationErrors
    } = useFormikContext();

    const languageChanged = useCallback((experienceIndex, field, value) => {
        handleValueChange(`languages[${experienceIndex}].${field}`)(value);
    }, []);
    const languageDeleted = useCallback(
        (deletingId) => () => {
            handleValueChange('languages')(languages.filter(({ id }) => deletingId !== id));
        },
        [languages]
    );

    const addLanguage = useCallback(() => {
        const id = uuid();
        handleValueChange('languages')([
            ...(languages ?? []),
            {
                index: languages?.length ?? 0,
                id
            }
        ]);
    }, [JSON.stringify(languages)]);

    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('languages')(
                arrayMove(languages, oldIndex, newIndex).map((data, index) => ({ ...data, index }))
            );
        },
        [languages]
    );

    return (
        <LanguagesEditForm
            data={languages}
            onMove={move}
            onValueChange={languageChanged}
            onDelete={languageDeleted}
            onAdd={addLanguage}
            errors={validationErrors?.languages}
        />
    );
};

export const LanguagesCardEditDialog = LanguagesCardEditDialogComponent;
