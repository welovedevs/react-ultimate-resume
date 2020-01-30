import React, { useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import omit from 'lodash/omit';
import moment from 'moment';
import { animated, useSpring } from 'react-spring';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import { Button, Checkbox, List, ListItem, Tag, TextField, Tooltip, Typography } from '@wld/ui';
import { Twemoji } from 'react-emoji-render';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { useFormikContext } from 'formik';
import keyBy from 'lodash/keyBy';
import uuid from 'uuid/v4';
import { ReactComponent as AddIcon } from '../../../../../assets/icons/add.svg';
import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/trash.svg';
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/keyboard_arrow_down.svg';
import { YearMonth } from '../../../../commons/year_month/year_month';
import { LocationField } from '../../../../commons/location_field/location_field';

import { styles } from './experiences_card_edit_dialog_styles';
import { translations } from './experiences_card_edit_dialog_translations';

const useStyles = createUseStyles(styles);

const DragHandle = SortableHandle(({ classes }) => <MoveIcon className={classes.dragHandle} />);

const JobTitle = ({ experience }) => {
    const { formatMessage } = useIntl();
    const title = useMemo(() => {
        const payload = {
            jobTitle: experience.position,
            companyName: experience.name,
            start: experience.startDate?.format('MMMM YYYY'),
            end: experience.endDate?.format('MMMM YYYY')
        };
        if (payload.companyName) {
            if (!payload.end) {
                return formatMessage(translations.jobTitleCompanyNoEnd, payload);
            }
            return formatMessage(translations.jobTitleCompanyBothDates, payload);
        }
        if (payload.end) {
            return formatMessage(translations.jobTitleNoCompanyNoEnd, payload);
        }
        return formatMessage(translations.jobTitleNoCompanyBothDates, payload);
    }, [experience]);

    return title;
};

const ExperienceItem = SortableElement(
    ({
        id,
        experience,
        onChange,
        onRemove,
        error: fieldErrors,
        folded,
        toggleFold,
        classes,
        experienceIndex: index
    }) => {
        const { formatMessage } = useIntl();

        const { rotate } = useSpring({
            rotate: folded ? -90 : 0
        });

        const hasError = !!fieldErrors;
        return (
            <div className={classes.experience}>
                <div className={classes.smallItemContainer}>
                    <DragHandle {...{ classes }} />
                    <ListItem
                        button
                        className={cn(classes.listItem, hasError && classes.listItemError)}
                        onClick={() => toggleFold(!folded)}
                    >
                        <animated.div
                            className={classes.arrowContainer}
                            style={{
                                transform: rotate.interpolate(value => `rotate(${value}deg)`)
                            }}
                        >
                            <ArrowIcon className={cn('refinement-arrow')} />
                        </animated.div>
                        <Typography className={classes.smallTitle} color="dark">
                            <JobTitle {...{ experience }} />
                        </Typography>
                        {hasError && <Twemoji svg text={formatMessage(translations.warning)} />}
                    </ListItem>
                    <Tooltip title={<FormattedMessage id="Main.lang.delete" defaultMessage="Supprimer" />}>
                        <Button className={classes.deleteButton} onClick={onRemove(id)}>
                            <DeleteIcon />
                        </Button>
                    </Tooltip>
                </div>
                {!folded && (
                    <ContentFields
                        {...{
                            fieldErrors,
                            id,
                            formatMessage,
                            experience,
                            onChange,
                            classes,
                            index
                        }}
                    />
                )}
            </div>
        );
    }
);

const ContentFields = ({ fieldErrors, id, formatMessage, experience, onChange, classes, index }) => {
    const stillEmployed = !experience.endDate;

    const handleStillEmployedChange = useCallback(() => {
        if (!stillEmployed) {
            onChange(index, 'endDate', null);
        } else {
            onChange(index, 'endDate', moment());
        }
    }, [index, stillEmployed]);

    const stillEmployedComponent = (
        <StillEmployedField value={stillEmployed} {...{ handleStillEmployedChange, formatMessage, classes }} />
    );

    const handleNameChange = useCallback(e => onChange(index, 'name', e.target.value), [index]);
    const handlePositionChange = useCallback(e => onChange(index, 'position', e.target.value), [index]);
    const handleSummaryChange = useCallback(e => onChange(index, 'summary', e.target.value), [index]);
    const handleStartDate = useCallback(value => onChange(index, 'startDate', value), [index]);
    const handleEndDate = useCallback(value => onChange(index, 'endDate', value), [index]);
    const handleLocationChange = useCallback(value => onChange(index, 'place', value), [index]);
    const handleLocationTextChange = useCallback(value => onChange(index, 'place', { name: value.target.value }), [
        index
    ]);

    return (
        <div className={classes.content}>
            <div className={classes.line} />
            <div className={classes.fields}>
                <div className={classes.fieldRow}>
                    <div className={classes.fieldContainer}>
                        <Typography color="dark" variant="label">
                            {formatMessage(translations.companyName)}
                        </Typography>
                        <TextField
                            id={`experience_companyName_${id}`}
                            placeholder={formatMessage(translations.companyNamePlaceholder)}
                            value={experience.name}
                            onChange={handleNameChange}
                            margin="normal"
                            variant="flat"
                        />
                        {fieldErrors?.name && (
                            <Typography color="danger" variant="helper" component="p">
                                {fieldErrors.name}
                            </Typography>
                        )}
                    </div>
                    <div className={classes.fieldContainer}>
                        <Typography color="dark" variant="label">
                            {formatMessage(translations.jobTitle)}
                        </Typography>
                        <TextField
                            id={`experience_jobTitle_${id}`}
                            placeholder={formatMessage(translations.jobTitlePlaceholder)}
                            value={experience.position}
                            onChange={handlePositionChange}
                            margin="normal"
                            variant="flat"
                        />
                        {fieldErrors?.position && (
                            <Typography color="danger" variant="helper" component="p">
                                {fieldErrors.position}
                            </Typography>
                        )}
                    </div>
                </div>
                <div className={classes.fieldRow}>
                    <div className={classes.fieldContainer}>
                        <Typography color="dark" variant="label">
                            {formatMessage(translations.jobPlace)}
                        </Typography>
                        <LocationField
                            id={`experience_jobPlace_${id}`}
                            placeholder={formatMessage(translations.jobPlacePlaceholder)}
                            value={experience.place?.name}
                            onLocationSelected={handleLocationChange}
                            onChange={handleLocationTextChange}
                            margin="normal"
                            variant="flat"
                        />
                        {fieldErrors?.place && (
                            <Typography color="danger" variant="helper" component="p">
                                {fieldErrors?.place.name || fieldErrors.place}
                            </Typography>
                        )}
                    </div>
                </div>
                <div className={cn(classes.fieldRow, classes.yearMonthRow)}>
                    <div className={classes.yearMonthWrapper}>
                        <YearMonth
                            variant="flat"
                            value={experience.startDate}
                            onChange={handleStartDate}
                            title={translations.startDate}
                            error={fieldErrors?.startDate}
                        />
                        {!stillEmployed && (
                            <YearMonth
                                variant="flat"
                                value={experience.endDate}
                                onChange={handleEndDate}
                                title={translations.endDate}
                                error={fieldErrors?.endDate}
                            />
                        )}
                    </div>
                    {stillEmployed && stillEmployedComponent}
                </div>
                {!stillEmployed && stillEmployedComponent}
                <div className={classes.fieldRow}>
                    <div className={cn(classes.fieldContainer, classes.fullWidthFieldContainer)}>
                        <Typography color="dark" variant="label">
                            {formatMessage(translations.descriptionTitle)}
                        </Typography>
                        <TextField
                            fullWidth
                            id={`experience_description_${id}`}
                            placeholder={formatMessage(translations.descriptionPlaceholder)}
                            value={experience.summary}
                            onChange={handleSummaryChange}
                            margin="normal"
                            variant="flat"
                            multiline
                            rows={4}
                        />
                        {fieldErrors?.summary && (
                            <Typography color="danger" variant="helper" component="p">
                                {fieldErrors.summary}
                            </Typography>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const SortableExperiences = SortableContainer(
    ({ items = [], experienceChanged, experienceDeleted, formatMessage, errors, foldedState, toggleFold, classes }) => (
        <List component="nav">
            {items
                .filter(Boolean)
                .sort(({ index: a }, { index: b }) => a - b)
                .map((experience, index) => (
                    <ExperienceItem
                        index={index}
                        key={`work_${experience.id}_${index}`}
                        onChange={experienceChanged}
                        onRemove={experienceDeleted}
                        id={experience.id}
                        experience={experience}
                        formatMessage={formatMessage}
                        error={errors && errors[index]}
                        folded={foldedState[experience.id]}
                        toggleFold={toggleFold(experience.id)}
                        classes={classes}
                        experienceIndex={index}
                    />
                ))}
        </List>
    )
);

const StillEmployedField = ({ value, classes, handleStillEmployedChange, formatMessage }) => (
    <div
        className={cn(
            classes.fieldRow,
            value && cn(classes.fieldRowJustifyEnd, classes.withMarginStillEmployedFieldRow)
        )}
    >
        <button
            type="button"
            className={cn(classes.fieldContainer, classes.checkboxField)}
            onClick={handleStillEmployedChange}
        >
            <Checkbox color="secondary" checked={value} variant={'outlined'} />
            <Typography customClasses={{ container: classes.typography }} color="dark" component="div">
                {formatMessage(translations.stillEmployed)}
            </Typography>
        </button>
    </div>
);

const ExperiencesEditForm = ({ helpers: { handleValueChange } }) => {
    const classes = useStyles({});
    const {
        values: { work },
        errors: validationErrors
    } = useFormikContext();

    const errors = validationErrors;

    const keyedValues = useMemo(() => keyBy(work, ({ id }) => id), [work]);

    const [foldedState, setFoldState] = useState(
        Object.keys(keyedValues || {}).reduce((state, id) => {
            state[id] = true;
            return state;
        }, {})
    );

    const experienceChanged = useCallback((experienceIndex, field, value) => {
        handleValueChange(`work[${experienceIndex}].${field}`)(value);
    }, []);
    const experienceDeleted = useCallback(
        id => () => {
            handleValueChange('work')(Object.values(omit(keyedValues, id)));
        },
        [JSON.stringify(keyedValues), foldedState]
    );

    const toggleFold = useCallback(
        id => value => {
            const newFoldState = { ...foldedState };
            newFoldState[id] = value;
            setFoldState(newFoldState);
        },
        [foldedState]
    );

    const addExperience = useCallback(() => {
        let id = uuid();
        handleValueChange('work')(
            work.concat({
                index: work.length,
                id
            })
        );

        const newFoldState = {
            ...Object.keys(keyedValues).reduce((state, id) => {
                state[id] = true;
                return state;
            }, {}),
            [id]: false
        };
        setFoldState(newFoldState);
    }, [JSON.stringify(work)]);

    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('work')(arrayMove(work, oldIndex, newIndex).map((data, index) => ({ ...data, index })));
        },
        [work]
    );
    const globalError = typeof errors === 'string' && errors;

    return (
        <div className={classes.container}>
            <Typography component="h2" variant="h4">
                <FormattedMessage
                    id="Experiences.editDialog.allExperiences"
                    defaultMessage="Describe all your experiences here"
                />
            </Typography>
            <SortableExperiences
                helperClass={classes.sortableHelper}
                onSortEnd={move}
                items={work}
                distance={15}
                useDragHandle
                lockAxis="y"
                {...{
                    experienceChanged,
                    experienceDeleted,
                    errors: errors?.work,
                    foldedState,
                    toggleFold,
                    classes
                }}
            />
            <div className={classes.addButton} onClick={addExperience}>
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
    );
};

export const ExperiencesEditDialog = ({ data, onEdit, validationSchema, onClose }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            validationSchema={validationSchemaToPass}
            open
            title={
                <FormattedMessage
                    id="Experiences.editDialog.title"
                    defaultMessage="Your past and present professional experiences"
                />
            }
        >
            {helpers => <ExperiencesEditForm helpers={helpers} />}
        </EditDialog>
    );
};
