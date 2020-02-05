import React, { useCallback, useMemo } from 'react';

import cn from 'classnames';
import omit from 'lodash/omit';
import keyBy from 'lodash/keyBy';
import { FormattedMessage, useIntl } from 'react-intl';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import uuid from 'uuid/v4';

import { List, TextField, Tooltip, Typography } from '@wld/ui';

import { useFormikContext } from 'formik';
import { createUseStyles } from 'react-jss';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { AddButton } from '../../../../commons/add_button/add_button';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as TrashIcon } from '../../../../../assets/icons/trash.svg';

import translations from './languages_translations';
import { styles } from './languages_styles';

const useStyles = createUseStyles(styles);

const LanguagesCardEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            open={open}
            onClose={onClose}
            data={data}
            onEdit={onEdit}
            validationSchema={validationSchemaToPass}
            title={<FormattedMessage id="Languages.editDialog.title" defaultMessage="Your languages" />}
        >
            {helpers => <LanguagesEditForm helpers={helpers} />}
        </EditDialog>
    );
};

const LanguageItem = SortableElement(
    ({ id, language, onChange, onRemove, error: fieldErrors, classes, languageIndex: index }) => {
        const { formatMessage } = useIntl();
        const handleLanguageChange = useCallback(e => onChange(index, 'language', e.target.value), [index]);
        const handleValueChange = useCallback(e => onChange(index, 'value', Number(e.target.value)), [index]);

        return (
            <div className={classes.itemContainer}>
                <DragHandle {...{ classes }} />
                <div className={classes.divider} />
                <Tooltip
                    title={(
                        <FormattedMessage
                            id="Main.lang.delete"
                            defaultMessage="Supprimer"
                        />
                    )}
                >
                    <button type="button" className={classes.button} onClick={onRemove(id)}>
                        <TrashIcon className={classes.removeIcon} />
                    </button>
                </Tooltip>
                <div className={classes.divider} />
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
                                customClasses={{
                                    container: classes.sliderValue
                                }}
                                color="dark"
                                variant="label"
                            >
                                {formatMessage(translations.level, { valueNode: <span className={classes.bolden}>{language.value}</span> })}
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
                                    customClasses: {
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
        {items.map((language, index) => (
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

const DragHandle = SortableHandle(({ classes }) => <MoveIcon className={classes.dragHandle} />);

const LanguagesEditForm = ({ helpers: { handleValueChange } }) => {
    const classes = useStyles();
    const {
        values: { languages },
        errors: validationErrors
    } = useFormikContext();

    const keyedValues = useMemo(() => keyBy(languages, ({ id }) => id), [languages]);

    const languageChanged = useCallback((experienceIndex, field, value) => {
        handleValueChange(`languages[${experienceIndex}].${field}`)(value);
    }, []);
    const languageDeleted = useCallback(
        id => () => {
            handleValueChange('languages')(Object.values(omit(keyedValues, id)));
        },
        [JSON.stringify(keyedValues)]
    );

    const addLanguage = useCallback(() => {
        const id = uuid();
        handleValueChange('languages')(
            languages.concat({
                index: languages.length,
                id
            })
        );
    }, [JSON.stringify(languages)]);

    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('languages')(
                arrayMove(languages, oldIndex, newIndex).map((data, index) => ({ ...data, index }))
            );
        },
        [languages]
    );
    const globalError = typeof validationErrors === 'string' && validationErrors;

    return (
        <>
            <SortableLanguagesItems
                lockToContainerEdges
                helperClass={classes.sortableHelper}
                items={languages}
                onSortEnd={move}
                distance={20}
                useDragHandle
                lockAxis="y"
                name="education"
                onChange={languageChanged}
                onDelete={languageDeleted}
                errors={validationErrors.languages}
                {...{ classes }}
            />
            <AddButton onClick={addLanguage} />
            {globalError && (
                <Typography color="danger" component="p">
                    {validationErrors}
                </Typography>
            )}
        </>
    );
};

export const LanguagesCardEditDialog = LanguagesCardEditDialogComponent;
