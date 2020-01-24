import React, { useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import omit from 'lodash/omit';
import range from 'lodash/range';
import keyBy from 'lodash/keyBy';
import { FormattedMessage, injectIntl, useIntl } from 'react-intl';
import * as moment from 'moment';
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc';

import * as uuid from 'uuid/v4';

import { MenuItem } from '@material-ui/core';

import { Button, Tooltip, List, ListItem, Typography, TextField, Tag } from '@wld/ui';

import { styles } from './languages_styles';
import translations from './languages_translations';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { useFormikContext } from 'formik';
import { createUseStyles } from 'react-jss';

import { ReactComponent as AddIcon } from '../../../../../assets/icons/add.svg';
import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as TrashIcon } from '../../../../../assets/icons/trash.svg';
import { Select } from '../../../../commons/select/select';
import { SliderWithPopper } from '../../../../commons/slider_with_popper/slider_with_popper';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';

const DragHandle = SortableHandle(({ classes }) => <MoveIcon className={classes.dragHandle} />);

const useStyles = createUseStyles(styles);

const LanguageItem = SortableElement(
    ({ id, language, onChange, onRemove, error: fieldErrors, classes, languageIndex: index }) => {
        const { formatMessage } = useIntl();
        const handleLanguageChange = useCallback(e => onChange(index, 'language', e.target.value), [index]);
        const handleValueChange = useCallback(e => onChange(index, 'value', Number(e.target.value)), [index]);

        return (
            <div className={classes.itemContainer}>
                <DragHandle {...{ classes }} />
                <ListItem className={cn(classes.listItem, fieldErrors && classes.listItemError)}>
                    <div className={classes.fieldGroup}>
                        <div className={classes.field}>
                            <Typography color="dark" variant="label">
                                {formatMessage(translations.language)}
                            </Typography>
                            <TextField
                                fullwidth
                                value={language.language}
                                onChange={handleLanguageChange}
                                id={`language_language_${id}`}
                                placeholder={formatMessage(translations.languagePlaceholder)}
                            />
                            {fieldErrors && fieldErrors.language && (
                                <Typography color="danger" variant="helper" component="p">
                                    {fieldErrors.language}
                                </Typography>
                            )}
                        </div>
                        <div className={classes.field}>
                            <Typography color="dark" variant="label">
                                {formatMessage(translations.level)}
                            </Typography>
                            <SliderWithPopper
                                color="primary"
                                name="value"
                                value={language.value}
                                onChange={handleValueChange}
                                min={0}
                                max={100}
                                className={classes.slider}
                            />
                            {fieldErrors && fieldErrors.value && (
                                <Typography color="danger" variant="helper" component="p">
                                    {fieldErrors.value}
                                </Typography>
                            )}
                        </div>
                    </div>
                    <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Supprimer" />}>
                        <Button className={classes.button} onClick={onRemove(id)}>
                            <TrashIcon />
                        </Button>
                    </Tooltip>
                </ListItem>
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
            <div className={classes.addButton} onClick={addLanguage}>
                <Tag className={classes.addTag}>
                    <AddIcon />
                </Tag>
                <Typography>
                    <FormattedMessage id="Main.lang.add" defaultMessage="Ajouter" />
                </Typography>
            </div>
            {globalError && (
                <Typography color="danger" component="p">
                    {validationErrors}
                </Typography>
            )}
        </>
    );
};

export const LanguagesCardEditDialog = ({ data, onEdit, validationSchema, onClose }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            validationSchema={validationSchemaToPass}
            open
            title={<FormattedMessage id="Languages.editDialog.title" defaultMessage="Your languages" />}
        >
            {helpers => <LanguagesEditForm helpers={helpers} />}
        </EditDialog>
    );
};
