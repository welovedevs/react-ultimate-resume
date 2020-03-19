import { createElement } from 'react';

const ProfileCardEditDialogComponent = ({ open, onClose, editDialog, data, isEditing }) => {
    if (!editDialog) {
        return null;
    }
    return createElement(editDialog.component, {
        onEdit: (...parameters) => {
            onClose();
            editDialog.onEdit(...parameters);
        },
        validationSchema: editDialog.validationSchema,
        data: editDialog.data || data,
        open,
        onClose,
        isEditing
    });
};

export const ProfileCardEditDialog = ProfileCardEditDialogComponent;
