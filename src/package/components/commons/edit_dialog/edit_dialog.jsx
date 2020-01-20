import React, { useCallback } from 'react';
import { Formik, useFormikContext } from 'formik';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const EditDialogContent = ({ children }) => {
    const { handleSubmit, setFieldValue, values } = useFormikContext();

    const handleValueChange = useCallback(name => value => setFieldValue(name, value), [setFieldValue]);
    const toggleValue = useCallback(name => () => setFieldValue(name, !values[name]), [setFieldValue, values]);

    return (
        <>
            <DialogContent>{children({ handleValueChange, toggleValue })}</DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Save</Button>
            </DialogActions>
        </>
    );
};
export const EditDialog = ({ open, onClose, data, onEdit, children, title }) => (
    <Dialog {...{ open, onClose }}>
        <DialogTitle>{title || 'Coucou'}</DialogTitle>
        <Formik initialValues={data} onSubmit={newValues => onEdit(newValues)}>
            <EditDialogContent>{children}</EditDialogContent>
        </Formik>
    </Dialog>
);
