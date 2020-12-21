import React, { memo, useCallback, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';
import { animated, useSpring, useTransition, config } from 'react-spring';

import { Twemoji } from 'react-emoji-render';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { useFormikContext } from 'formik';
import keyBy from 'lodash/keyBy';
import range from 'lodash/range';
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

import { translations } from './certifications_translations';
import { styles } from './certifications_styles';
import { CERTIFICATES_CONTENT_TRANSITION_SPRING_PROPS } from './certifications_edit_dialog_spring_props';

const DragHandle = SortableHandle(({ classes }) => (
    <button className={classes.dragHandleButton} type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));
const useStyles = createUseStyles(styles);

const CertificationsCardEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
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
            title={<FormattedMessage id="Certifications.editDialog.title" defaultMessage="Your certificates" />}
        >
            {(helpers) => <CertificationsEditFormWrapper helpers={helpers} />}
        </EditDialog>
    );
};

const CertificationsEditFormWrapper = ({ helpers: { handleValueChange } }) => {
    const {
        values: { certifications },
        errors: validationErrors
    } = useFormikContext();

    const errors = validationErrors?.certifications;

    const certificationChanged = useCallback((certificationsIndex, field, value) => {
        handleValueChange(`certifications[${certificationsIndex}].${field}`)(value);
    }, []);
    const certificationDeleted = useCallback(
        (deletedId) => () => {
            handleValueChange('certifications')(certifications.filter(({ id }) => deletedId !== id));
        },
        [JSON.stringify(certifications)]
    );

    const certificationAdded = useCallback(() => {
        const id = uuid();
        return handleValueChange('certifications')([
            ...certifications,
            {
                position: certifications.length,
                id
            }
        ]);
    }, [JSON.stringify(certifications)]);
    const move = useCallback(
        ({ oldIndex, newIndex }) => {
            handleValueChange('certifications')(arrayMove(certifications, oldIndex, newIndex));
        },
        [JSON.stringify(certifications)]
    );

    return (
        <CertificationsEditForm
            data={certifications}
            onMove={move}
            onAdd={certificationAdded}
            onFieldChange={certificationChanged}
            onDelete={certificationDeleted}
            errors={errors}
        />
    );
};

const SelectComponent = memo(({ value, onChange, classes, id }) => {
    const selectYearItems = useMemo(
        () =>
            range(1980, moment().year() + 1)
                .sort((a, b) => b - a)
                .map((year) => (
                    <MenuItem key={`certification_year_${id}_${year}`} value={year}>
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

const CertificationItem = SortableElement(
    ({
        id,
        certification,
        onChange,
        onRemove,
        error: fieldErrors,
        folded,
        toggleFold,
        classes,
        certificationIndex: index
    }) => {
        const theme = useTheme();
        const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

        const { formatMessage } = useIntl();

        const handleIssuerChange = useCallback((event) => onChange(index, 'issuer', event.target.value), [index]);
        const handleNameChange = useCallback((event) => onChange(index, 'name', event.target.value), [index]);
        const handleDateChange = useCallback((value) => onChange(index, 'date', moment({ year: value })), [index]);
        const handleUrlChange = useCallback((event) => onChange(index, 'url', event.target.value), [index]);

        const { rotate } = useSpring({
            rotate: folded ? -90 : 0
        });

        const contentTransitions = useTransition(
            !folded ? certification : null,
            (item) => `${item ? 'visible' : 'invisible'}_certification_${item?.id}_content`,
            {
                ...CERTIFICATES_CONTENT_TRANSITION_SPRING_PROPS,
                unique: true,
                ...config.stiff
            }
        );

        const hasError = Boolean(fieldErrors);

        return (
            <div className={classes.certification}>
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
                                {certification.issuer}
                            </Typography>
                        </ListItem>
                    </div>
                    {contentTransitions.map(
                        ({ item, key, props }) =>
                            item && (
                                <animated.div
                                    key={key}
                                    style={props}
                                    className={cn(classes.listItem, fieldErrors && classes.listItemError)}
                                >
                                    <div className={classes.fieldGroup}>
                                        <div className={classes.field}>
                                            <TextField
                                                fullWidth
                                                variant="flat"
                                                value={certification.issuer}
                                                onChange={handleIssuerChange}
                                                id={`certification_issuer_${id}`}
                                                label={formatMessage(translations.issuerName)}
                                                placeholder={formatMessage(translations.issuerNamePlaceholder)}
                                            />
                                            {fieldErrors && fieldErrors.issuer && (
                                                <Typography color="danger" variant="helper" component="p">
                                                    {fieldErrors.issuer}
                                                </Typography>
                                            )}
                                        </div>
                                        <div className={classes.field}>
                                            <TextField
                                                fullWidth
                                                variant="flat"
                                                value={certification.name}
                                                onChange={handleNameChange}
                                                id={`certification_name_${id}`}
                                                label={formatMessage(translations.name)}
                                                placeholder={formatMessage(translations.namePlaceholder)}
                                            />
                                            {fieldErrors && fieldErrors.name && (
                                                <Typography color="danger" variant="helper" component="p">
                                                    {fieldErrors.name}
                                                </Typography>
                                            )}
                                        </div>
                                    </div>
                                    <div className={classes.fieldGroup}>
                                        <div className={classes.field}>
                                            <SelectComponent
                                                onChange={handleDateChange}
                                                id={certification.id}
                                                value={certification.date}
                                                classes={classes}
                                            />
                                            {fieldErrors && fieldErrors.date && (
                                                <Typography color="danger" variant="helper" component="p">
                                                    {fieldErrors.date}
                                                </Typography>
                                            )}
                                        </div>
                                        <div className={classes.field}>
                                            <TextField
                                                fullWidth
                                                variant="flat"
                                                value={certification.url}
                                                onChange={handleUrlChange}
                                                id={`certification_url_${id}`}
                                                label={formatMessage(translations.url)}
                                                placeholder={formatMessage(translations.urlPlaceholder)}
                                            />
                                            {fieldErrors && fieldErrors.url && (
                                                <Typography color="danger" variant="helper" component="p">
                                                    {fieldErrors.url}
                                                </Typography>
                                            )}
                                        </div>
                                    </div>
                                </animated.div>
                            )
                    )}
                </div>
            </div>
        );
    }
);

const SortableCertificationsItems = SortableContainer(
    ({ items, certificationChanged, certificationDeleted, errors, name, certifications, classes }) => {
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
                {items?.map((certification, index) => (
                    <CertificationItem
                        key={`${name}_${certification.id}_${index}`}
                        onChange={certificationChanged}
                        onRemove={certificationDeleted}
                        id={certification.id}
                        certificationIndex={index}
                        error={errors && errors[index]}
                        toggleFold={toggleFold(certification.id)}
                        folded={foldedState[certification.id]}
                        {...{
                            index,
                            certification,
                            certifications,
                            classes
                        }}
                    />
                ))}
            </List>
        );
    }
);

export const CertificationsEditForm = ({ data, onMove, onAdd, onFieldChange, onDelete, errors }) => {
    const classes = useStyles();
    const globalError = typeof errors === 'string' && errors;

    return (
        <>
            <SortableCertificationsItems
                lockToContainerEdges
                helperClass={classes.sortableHelper}
                items={data}
                onSortEnd={onMove}
                distance={20}
                useDragHandle
                lockAxis="y"
                name="certification"
                certificationChanged={onFieldChange}
                certificationDeleted={onDelete}
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

export const CertificationsCardEditDialog = CertificationsCardEditDialogComponent;
