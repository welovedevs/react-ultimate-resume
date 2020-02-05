import { createElement } from 'react';

const ProfileCardEditDialogComponent = ({ open, onClose, editDialog, data }) => {
    if (!editDialog) {
        return null;
    }
    return createElement(editDialog.component, {
        onEdit: (...parameters) => {
            onClose();
            editDialog.onEdit(...parameters);
        },
        validationSchema: editDialog.validationSchema,
        data,
        open,
        onClose
    });
};

export const ProfileCardEditDialog = ProfileCardEditDialogComponent;
