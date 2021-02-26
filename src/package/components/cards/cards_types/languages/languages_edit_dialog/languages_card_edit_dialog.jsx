import React, { useCallback, useMemo } from 'react';

import cn from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import uuid from 'uuid/v4';

import { List, TextField, Tooltip, Typography } from '@welovedevs/ui';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

import { useFormikContext } from 'formik';
import { createUseStyles, useTheme } from 'react-jss';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { AddButton } from '../../../../commons/add_button/add_button';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as TrashIcon } from '../../../../../assets/icons/trash.svg';

import translations from './languages_edit_dialog_translations';
import { styles } from './languages_edit_dialog_styles';

const useStyles = createUseStyles(styles);

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

const LanguageItem = SortableElement(
    ({ id, language, onChange, onRemove, error: fieldErrors, classes, languageIndex: index }) => {
        const { formatMessage } = useIntl();
        const theme = useTheme();
        const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

        const handleLanguageChange = useCallback((e) => onChange(index, 'language', e.target.value), [index]);
        const handleValueChange = useCallback((e) => onChange(index, 'value', Number(e.target.value)), [index]);

        return (
            <div className={classes.itemContainer}>
                <div className={classes.actions}>
                    <DragHandle {...{ classes }} />
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
    }
);

const SortableLanguagesItems = SortableContainer(({ items, onChange, onDelete, errors, name, schools, classes }) => (
    <List>
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
    </List>
));

const DragHandle = SortableHandle(({ classes }) => (
    <button type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));

export const LanguagesEditForm = ({ data, onMove, onValueChange, onDelete, onAdd, errors: validationErrors }) => {
    const classes = useStyles();
    const globalError = typeof validationErrors === 'string' && validationErrors;

    return (
        <>
            <SortableLanguagesItems
                useDragHandle
                lockToContainerEdges
                helperClass={classes.sortableHelper}
                items={data}
                onSortEnd={onMove}
                distance={20}
                lockAxis="y"
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
