import React, { useCallback } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { Formik, useFormikContext } from 'formik';

import { Button } from '@wld/ui';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';

import { styles } from './edit_dialog_styles';

const useStyles = createUseStyles(styles);

const EditDialogComponent = ({
    open,
    onClose,
    data,
    onEdit,
    children,
    title = '✏️',
    validationSchema,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles();
    return (
        <Dialog
            classes={{
                paper: cn(classes.paper, receivedClasses.paper)
            }}
            open={open}
            onClose={onClose}
        >
            <DialogTitle>{title}</DialogTitle>
            <Formik
                validateOnChange={false}
                initialValues={data}
                onSubmit={newValues => onEdit(newValues)}
                validationSchema={validationSchema}
            >
                <Content onClose={onClose} classes={classes} receivedClasses={receivedClasses}>
                    {children}
                </Content>
            </Formik>
        </Dialog>
    );
};

const Content = ({ children, onClose, classes, receivedClasses }) => {
    const { handleSubmit, setFieldValue, values } = useFormikContext();

    const handleValueChange = useCallback(
        name => value => {
            console.debug(`Setting field ${name} to value ${value}`);
            return setFieldValue(name, value);
        },
        [setFieldValue]
    );
    const toggleValue = useCallback(name => () => setFieldValue(name, !values[name]), [setFieldValue, values]);

    return (
        <>
            <DialogContent
                classes={{
                    root: cn(classes.content, receivedClasses.content)
                }}
            >
                {children({ handleValueChange, toggleValue })}
            </DialogContent>
            <DialogActions
                classes={{
                    root: cn(classes.actions, receivedClasses.actions)
                }}
            >
                <Button size="small" onClick={onClose}>
                    Close
                </Button>
                <Button type="submit" size="small" color="primary" onClick={handleSubmit}>
                    Save
                </Button>
            </DialogActions>
        </>
    );
};

export const EditDialog = EditDialogComponent;
