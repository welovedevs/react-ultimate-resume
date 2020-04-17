import React, { useCallback } from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';
import { Formik, useFormikContext } from 'formik';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button, Tooltip } from '@welovedevs/ui';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';

import { styles } from './edit_dialog_styles';

const useStyles = createUseStyles(styles);

const EditDialogComponent = ({
    open,
    onClose,
    fullScreen,
    data,
    onEdit,
    children,
    title = '✏️',
    validationSchema,
    isEditing,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

    return (
        <Dialog
            fullScreen={fullScreen || isMobile}
            classes={{
                paper: cn(classes.paper, receivedClasses.paper, fullScreen && classes.fullScreen)
            }}
            open={open}
            onClose={onClose}
        >
            <Formik
                validateOnChange={false}
                initialValues={data}
                onSubmit={(newValues) => onEdit(newValues)}
                validationSchema={validationSchema}
            >
                <TitleContent
                    title={title}
                    fullScreen={fullScreen}
                    isMobile={isMobile}
                    onClose={onClose}
                    classes={classes}
                    receivedClasses={receivedClasses}
                    isEditing={isEditing}
                >
                    {children}
                </TitleContent>
            </Formik>
        </Dialog>
    );
};

const TitleContent = ({ title, fullScreen, isMobile, onClose, children, classes, receivedClasses, isEditing }) => {
    const { handleSubmit, setFieldValue, values } = useFormikContext();
    return (
        <>
            <div className={classes.titleContainer}>
                <DialogTitle>{title}</DialogTitle>
                {fullScreen && !isMobile && (
                    <Actions
                        fullScreen
                        onClose={onClose}
                        handleSubmit={handleSubmit}
                        classes={classes}
                        receivedClasses={receivedClasses}
                        isEditing={isEditing}
                    />
                )}
            </div>
            <Content
                onClose={onClose}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                values={values}
                fullScreen={fullScreen}
                isMobile={isMobile}
                classes={classes}
                receivedClasses={receivedClasses}
                isEditing={isEditing}
            >
                {children}
            </Content>
        </>
    );
};

const Content = ({
    children,
    onClose,
    handleSubmit,
    setFieldValue,
    values,
    fullScreen,
    isMobile,
    classes,
    receivedClasses,
    isEditing
}) => {
    const handleValueChange = useCallback(
        (name) => (value) => {
            console.log(`[Edit Dialog] Setting field ${name} to value.`, { value });
            return setFieldValue(name, value);
        },
        [setFieldValue]
    );
    const toggleValue = useCallback((name) => () => setFieldValue(name, !values[name]), [setFieldValue, values]);

    return (
        <>
            <DialogContent
                classes={{
                    root: cn(classes.content, receivedClasses.content)
                }}
            >
                {children({ handleValueChange, toggleValue, fullScreen, isMobile })}
            </DialogContent>
            {(!fullScreen || isMobile) && (
                <Actions
                    onClose={onClose}
                    handleSubmit={handleSubmit}
                    classes={classes}
                    receivedClasses={receivedClasses}
                    isEditing={isEditing}
                />
            )}
        </>
    );
};

const Actions = ({ onClose, handleSubmit, fullScreen, classes, receivedClasses, isEditing }) => (
    <DialogActions
        classes={{
            root: cn(classes.actions, receivedClasses.actions)
        }}
    >
        <Tooltip
            title={<FormattedMessage id="EditDialog.close.tooltip" defaultMessage="Any modification won't be saved!" />}
        >
            <Button size="small" onClick={onClose}>
                <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
            </Button>
        </Tooltip>
        {isEditing && (
            <Button
                variant={fullScreen ? 'contained' : 'text'}
                type="submit"
                size="small"
                color="primary"
                onClick={handleSubmit}
            >
                <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
            </Button>
        )}
    </DialogActions>
);

export const EditDialog = EditDialogComponent;
