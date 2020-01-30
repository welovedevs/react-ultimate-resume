import React, { useCallback, useEffect, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import omit from 'lodash/omit';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import { Button, List, ListItem, Tag, TextField, Tooltip, Typography } from '@wld/ui';

import translations from './experiences_card_edit_dialog_translations';
import styles from './experiences_card_edit_dialog_styles';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { useFormikContext } from 'formik';
import keyBy from 'lodash/keyBy';
import uuid from 'uuid/v4';
import { ReactComponent as AddIcon } from '../../../../../assets/icons/add.svg';
import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/trash.svg';
import { ReactComponent as RandomIcon } from '../../../../../assets/icons/random.svg';
import { useGiphyResults } from '../../../../hooks/giphy/use_giphy_results';
import { LoadingSpinner } from '../../../../commons/loading_spinner/loading_spinner';

const useStyles = createUseStyles(styles);

const DragHandle = SortableHandle(({ classes }) => <MoveIcon className={classes.dragHandle} />);

const InterestItem = SortableElement(
    ({
        id,
        interest,
        onChange,
        onRemove,
        error: fieldErrors,
        classes,
        interestIndex: index,
        setSelectedIndex,
        selected
    }) => {
        const { formatMessage } = useIntl();

        const hasError = !!fieldErrors;
        return (
            <div className={classes.experience}>
                <DragHandle {...{ classes }} />
                <ListItem
                    button
                    className={cn(
                        classes.listItem,
                        hasError && classes.listItemError,
                        selected && classes.listItemSelected
                    )}
                >
                    <ContentFields
                        {...{
                            setSelectedIndex,
                            fieldErrors,
                            id,
                            formatMessage,
                            interest,
                            onChange,
                            classes,
                            index,
                            onRemove
                        }}
                    />
                </ListItem>
            </div>
        );
    }
);

const ContentFields = ({
    fieldErrors,
    id,
    formatMessage,
    interest,
    onChange,
    classes,
    index,
    setSelectedIndex,
    onRemove
}) => {
    const handleNameChange = useCallback(e => onChange(index, 'name', e.target.value), [index]);

    const onGifClick = useCallback(() => setSelectedIndex(index), [index]);
    return (
        <div className={classes.content}>
            <div className={classes.gifItem} onClick={onGifClick}>
                <div className={classes.imageWrapper}>
                    <img className={classes.image} src={interest.gifUrl} alt={interest.name} />
                </div>
                <div className={classes.textFieldWrapper}>
                    <TextField
                        id={`interest_name_${id}`}
                        inputClassName={classes.interestNameTextFieldInput}
                        placeholder={formatMessage(translations.interestNamePlaceholder)}
                        value={interest.name}
                        onChange={handleNameChange}
                        margin="normal"
                        size="small"
                        variant="flat"
                    />
                    <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Supprimer" />}>
                        <Button className={classes.deleteButton} onClick={onRemove(id)}>
                            <DeleteIcon />
                        </Button>
                    </Tooltip>
                </div>
                {fieldErrors?.name && (
                    <Typography color="danger" variant="helper" component="p">
                        {fieldErrors.name}
                    </Typography>
                )}
            </div>
        </div>
    );
};

const SortableInterests = SortableContainer(
    ({ items = [], interestDeleted, interestChanged, errors, setSelectedIndex, classes, selectedIndex }) => (
        <List component="nav" className={classes.list}>
            {items
                .filter(Boolean)
                .sort(({ index: a }, { index: b }) => a - b)
                .map((interest, index) => (
                    <InterestItem
                        selected={selectedIndex === index}
                        index={index}
                        key={`interest_${interest.id}_${index}`}
                        onChange={interestChanged}
                        onRemove={interestDeleted}
                        setSelectedIndex={setSelectedIndex}
                        id={interest.id}
                        interest={interest}
                        error={errors && errors[index]}
                        classes={classes}
                        interestIndex={index}
                    />
                ))}
        </List>
    )
);

const GifPicker = ({ classes, onSelect }) => {
    const { formatMessage } = useIntl();
    const [input, setInput] = useState(null);
    const [page, setPage] = useState(0);
    const { gifs, loading } = useGiphyResults(input, page, 10);

    useEffect(() => setPage(0), [input]);
    const showNextPage = useCallback(() => setPage(page + 1), [page]);

    const handleInputChange = useCallback(e => setInput(e.target.value), []);

    return (
        <div className={classes.gifPicker}>
            <div className={classes.gifSearchFieldWrapper}>
                <TextField
                    className={classes.gifSearchField}
                    value={input}
                    onChange={handleInputChange}
                    placeholder={formatMessage(translations.gifSearchPlaceholder)}
                    variant="flat"
                />
                {gifs && input && (
                    <Button onClick={showNextPage}>
                        <RandomIcon />
                    </Button>
                )}
                {loading && <LoadingSpinner />}
            </div>
            {gifs && input && (
                <div className={classes.giphyResults}>
                    {gifs.map(({ url, id, title }, index) => (
                        <div
                            onClick={onSelect(url)}
                            key={`gif_${id}`}
                            className={cn(classes.imageWrapper, classes.gif)}
                        >
                            <img src={url} alt={title} className={classes.image} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const InterestsEditForm = ({ helpers: { handleValueChange }, classes }) => {
    const {
        values: { interests },
        errors: validationErrors,
        handleChange
    } = useFormikContext();

    const [selectedIndex, setSelectedIndex] = useState(null);

    const errors = validationErrors;

    const keyedValues = useMemo(() => keyBy(interests, ({ id }) => id), [interests]);

    const interestChanged = useCallback((interestIndex, field, value) => {
        handleValueChange(`interests[${interestIndex}].${field}`)(value);
    }, []);

    const interestDeleted = useCallback(
        id => () => {
            handleValueChange('interests')(Object.values(omit(keyedValues, id)));
        },
        [JSON.stringify(keyedValues)]
    );

    const addInterest = useCallback(() => {
        let id = uuid();
        handleValueChange('interests')(
            interests.concat({
                index: interests.length,
                id
            })
        );

        setSelectedIndex(interests.length);
    }, [JSON.stringify(interests)]);

    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('interests')(
                arrayMove(interests, oldIndex, newIndex).map((data, index) => ({ ...data, index }))
            );
        },
        [interests]
    );
    const globalError = typeof errors === 'string' && errors;

    const handleGifChange = useCallback(value => () => interestChanged(selectedIndex, 'gifUrl', value), [
        selectedIndex
    ]);

    return (
        <>
            <div className={classes.currentElements}>
                <SortableInterests
                    helperClass={classes.sortableHelper}
                    onSortEnd={move}
                    items={interests}
                    distance={15}
                    useDragHandle
                    lockAxis="y"
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    {...{
                        interestChanged,
                        interestDeleted,
                        errors: errors?.interests,
                        classes
                    }}
                />
                <div className={classes.addButton} onClick={addInterest}>
                    <Tag className={classes.addTag}>
                        <AddIcon />
                    </Tag>
                    <Typography>
                        <FormattedMessage id="Main.lang.add" defaultMessage="Ajouter" />
                    </Typography>
                </div>
                {globalError && (
                    <Typography color="danger" component="p">
                        {errors}
                    </Typography>
                )}
            </div>
            {selectedIndex === null && (
                <div className={cn(classes.gifPickerPlaceHolder)}>
                    <Typography variant="h4" component="h4">
                        <FormattedMessage
                            id="Interests.editDialog.gifs.placeholder"
                            defaultMessage="Select an item to change its gif !"
                        />
                    </Typography>
                </div>
            )}
            {selectedIndex !== null && (
                <GifPicker selectedIndex={selectedIndex} classes={classes} onSelect={handleGifChange} />
            )}
        </>
    );
};

export const InterestsEditDialog = ({ data, onEdit, validationSchema, onClose }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);
    const classes = useStyles({});

    return (
        <EditDialog
            dialogClasses={{
                content: classes.dialogContent,
                dialog: { root: classes.dialogRoot, paper: classes.dialogPaper }
            }}
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            validationSchema={validationSchemaToPass}
            open
            title={
                <FormattedMessage
                    id="Interests.editDialog.title"
                    defaultMessage="Show your loved hobbies with fancy gifs !"
                />
            }
        >
            {helpers => <InterestsEditForm helpers={helpers} classes={classes} />}
        </EditDialog>
    );
};
