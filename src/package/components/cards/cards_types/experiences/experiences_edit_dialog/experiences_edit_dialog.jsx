import React, { useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import { animated, useSpring, useTransition } from 'react-spring';
import { Twemoji } from 'react-emoji-render';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { useFormikContext } from 'formik';
import moment from 'moment';
import keyBy from 'lodash/keyBy';
import uuid from 'uuid/v4';

import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import { Checkbox, List, ListItem, TextField, Tooltip, Typography } from '@welovedevs/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { YearMonth } from '../../../../commons/year_month/year_month';
import { LocationField } from '../../../../commons/location_field/location_field';
import { AddButton } from '../../../../commons/add_button/add_button';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/trash.svg';
import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/keyboard_arrow_down.svg';

import { EXPERIENCE_CONTENT_TRANSITION_SPRING_PROPS } from './experiences_edit_dialog_spring_props';

import { translations } from './experiences_edit_dialog_translations';
import { styles } from './experiences_edit_dialog_styles';
import { useOptions } from '../../../../hooks/use_options';

const useStyles = createUseStyles(styles);

const DragHandle = SortableHandle(({ classes }) => (
    <button className={classes.dragHandleButton} type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));

const ExperiencesEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
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
            title={
                <FormattedMessage
                    id="Experiences.editDialog.title"
                    defaultMessage="Edit your professional experiences?"
                />
            }
        >
            {(helpers) => <ExperiencesEditFormWrapper helpers={helpers} />}
        </EditDialog>
    );
};

const ExperiencesEditFormWrapper = ({ helpers: { handleValueChange } }) => {
    const {
        values: { work },
        errors: validationErrors
    } = useFormikContext();

    const errors = validationErrors;

    const experienceFieldChanged = useCallback((experienceIndex, field, value) => {
        handleValueChange(`work[${experienceIndex}].${field}`)(value);
    }, []);
    const experienceDeleted = useCallback(
        (idToDelete) => () => {
            handleValueChange('work')(work.filter(({ id }) => id !== idToDelete));
        },
        [JSON.stringify(work)]
    );

    const addExperience = useCallback(() => {
        const id = uuid();
        handleValueChange('work')(
            work.concat({
                index: work.length,
                id
            })
        );
    }, [JSON.stringify(work)]);

    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('work')(arrayMove(work, oldIndex, newIndex).map((data, index) => ({ ...data, index })));
        },
        [work]
    );

    return (
        <ExperiencesEditForm
            data={work}
            errors={errors?.work}
            onAdd={addExperience}
            onMove={move}
            onFieldChange={experienceFieldChanged}
            onDelete={experienceDeleted}
        />
    );
};

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
        const theme = useTheme();
        const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
        const [disableSortableExperience] = useOptions('disableSortableExperience', false);

        const { rotate } = useSpring({
            rotate: folded ? -90 : 0
        });

        const contentTransitions = useTransition(
            !folded ? experience : null,
            (item) => `${item ? 'visible' : 'invisible'}_experience_${item?.id}_content`,
            {
                ...EXPERIENCE_CONTENT_TRANSITION_SPRING_PROPS,
                unique: true
            }
        );

        const dragHandle = useMemo(() => {
            if (disableSortableExperience) {
                return null;
            }

            return (
                <>
                    <DragHandle classes={classes} />
                    <div className={classes.divider} />
                </>
            );
        }, [disableSortableExperience]);
        const hasError = Boolean(fieldErrors);
        return (
            <div className={classes.experience}>
                <div className={classes.smallItemContainer}>
                    {dragHandle}
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
                        <animated.div
                            className={classes.arrowContainer}
                            style={{
                                transform: rotate.to((value) => `rotate(${value}deg)`)
                            }}
                        >
                            <ArrowIcon className={cn('refinement-arrow')} />
                        </animated.div>
                        {hasError && <Twemoji className={classes.warningIcon} svg text="⚠️" />}
                        <Typography className={classes.smallTitle} color="dark">
                            <JobTitle {...{ experience }} />
                        </Typography>
                    </ListItem>
                </div>
                {contentTransitions.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div key={key} style={props}>
                                <ContentFields
                                    key={key}
                                    fieldErrors={fieldErrors}
                                    id={id}
                                    formatMessage={formatMessage}
                                    experience={experience}
                                    onChange={onChange}
                                    classes={classes}
                                    index={index}
                                />
                            </animated.div>
                        )
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

    const handleNameChange = useCallback((e) => onChange(index, 'name', e.target.value), [index]);
    const handlePositionChange = useCallback((e) => onChange(index, 'position', e.target.value), [index]);
    const handleSummaryChange = useCallback((e) => onChange(index, 'summary', e.target.value), [index]);
    const handleStartDate = useCallback((value) => onChange(index, 'startDate', value), [index]);
    const handleEndDate = useCallback((value) => onChange(index, 'endDate', value), [index]);
    const handleLocationChange = useCallback((value) => onChange(index, 'place', value), [index]);
    const handleLocationTextChange = useCallback((value) => onChange(index, 'place', { name: value.target.value }), [
        index
    ]);

    return (
        <div className={classes.content}>
            <div className={classes.line} />
            <div className={classes.fields}>
                <div className={classes.fieldRow}>
                    <div className={classes.fieldContainer}>
                        <Typography component="p" color="dark" variant="label">
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
                        <Typography component="p" color="dark" variant="label">
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
                        <Typography component="p" color="dark" variant="label">
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
                        <div className={classes.fieldContainer}>
                            <YearMonth
                                textfieldProps={{ fullWidth: true }}
                                variant="flat"
                                value={experience.startDate}
                                onChange={handleStartDate}
                                title={translations.startDate}
                                error={fieldErrors?.startDate}
                            />
                        </div>
                        {!stillEmployed && (
                            <div className={classes.fieldContainer}>
                                <YearMonth
                                    variant="flat"
                                    value={experience.endDate}
                                    onChange={handleEndDate}
                                    title={translations.endDate}
                                    error={fieldErrors?.endDate}
                                />
                            </div>
                        )}
                    </div>
                    {stillEmployed && stillEmployedComponent}
                </div>
                {!stillEmployed && stillEmployedComponent}
                <div className={classes.fieldRow}>
                    <div className={cn(classes.fieldContainer, classes.fullWidthFieldContainer)}>
                        <Typography component="p" color="dark" variant="label">
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
    ({
        items = [],
        experienceFieldChanged,
        experienceDeleted,
        formatMessage,
        errors,
        foldedState,
        toggleFold,
        classes
    }) => (
        <List component="nav">
            {items
                .filter(Boolean)
                .sort(({ index: a }, { index: b }) => a - b)
                .map((experience, index) => (
                    <ExperienceItem
                        index={index}
                        key={`work_${experience.id}_${index}`}
                        onChange={experienceFieldChanged}
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
            <Checkbox color="secondary" checked={value} variant="outlined" />
            <Typography customClasses={{ container: classes.typography }} color="dark" component="div">
                {formatMessage(translations.stillEmployed)}
            </Typography>
        </button>
    </div>
);

const ExperiencesEditForm = ({ data, errors, onAdd, onMove, onFieldChange, onDelete }) => {
    const classes = useStyles({});
    const keyedValues = useMemo(() => keyBy(data, ({ id }) => id), [data]);

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

    const globalError = typeof errors === 'string' && errors;

    return (
        <div className={classes.container}>
            <SortableExperiences
                lockToContainerEdges
                helperClass={classes.sortableHelper}
                onSortEnd={onMove}
                items={data}
                distance={15}
                useDragHandle
                lockAxis="y"
                experienceFieldChanged={onFieldChange}
                experienceDeleted={onDelete}
                {...{
                    errors,
                    foldedState,
                    toggleFold,
                    classes
                }}
            />
            <AddButton onClick={onAdd} />
            {globalError && (
                <Typography color="danger" component="p">
                    {errors}
                </Typography>
            )}
        </div>
    );
};

export const ExperiencesEditDialog = ExperiencesEditDialogComponent;
