import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { Formik, useFormikContext } from 'formik';

import { Button } from '@wld/ui';
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';

import { styles } from './edit_dialog_styles';

const useStyles = createUseStyles(styles);

const EditDialogContent = ({ children, onClose }) => {
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
            <DialogContent>{children({ handleValueChange, toggleValue })}</DialogContent>
            <DialogActions>
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
export const EditDialog = ({ open, onClose, data, onEdit, children, title, validationSchema }) => {
    const classes = useStyles();
    return (
        <Dialog {...{ open, onClose }}>
            <DialogTitle>
                {title || 'Coucou'}
            </DialogTitle>
            <Formik
                validateOnChange={false}
                initialValues={data}
                onSubmit={newValues => onEdit(newValues)}
                validationSchema={validationSchema}
            >
                <EditDialogContent onClose={onClose}>{children}</EditDialogContent>
            </Formik>
        </Dialog>
    );
};
