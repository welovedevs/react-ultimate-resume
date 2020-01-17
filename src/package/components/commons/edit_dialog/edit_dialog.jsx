import React from 'react';
import { Formik } from 'formik';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

export const EditDialog = ({ open, onClose, data, onEdit, children, title }) => (
    <Dialog {...{ open, onClose }}>
        <DialogTitle>{title || 'Coucou'}</DialogTitle>
        <Formik initialValues={data} onSubmit={newValues => onEdit(newValues)}>
            {formikBag => (
                <>
                    <DialogContent>{children}</DialogContent>
                    <DialogActions>
                        <Button onClick={formikBag.handleSubmit}>Save</Button>
                    </DialogActions>
                </>
            )}
        </Formik>
    </Dialog>
);
