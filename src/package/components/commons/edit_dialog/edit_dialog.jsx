import React, { useCallback } from 'react';
import { Formik, useFormikContext } from 'formik';
import { Button, Typography } from '@wld/ui';
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { createUseStyles } from 'react-jss';
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
            <Typography variant="h3" component="h3" className={classes.title}>
                {title || 'Coucou'}
            </Typography>
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
