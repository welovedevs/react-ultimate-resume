import React, { useCallback } from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';
import { Formik, useFormikContext } from 'formik';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from '@wld/ui';

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
    classes: receivedClasses = {}
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
    const classes = useStyles();
    return (
        <Dialog
            fullScreen={fullScreen || isMobile}
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
                    <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                </Button>
                <Button type="submit" size="small" color="primary" onClick={handleSubmit}>
                    <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
                </Button>
            </DialogActions>
        </>
    );
};

export const EditDialog = EditDialogComponent;
