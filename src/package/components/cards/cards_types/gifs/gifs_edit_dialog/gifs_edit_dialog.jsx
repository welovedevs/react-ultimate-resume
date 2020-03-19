import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { GifsEditForm } from './gifs_edit_form/gifs_edit_form';

import { styles } from './gifs_edit_dialog_styles';

const useStyles = createUseStyles(styles);

const GifsEditDialogComponent = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <>
            <EditDialog
                fullScreen
                classes={{
                    paper: classes.paper,
                    content: classes.dialogRoot
                }}
                open={open}
                onClose={onClose}
                validationSchema={validationSchemaToPass}
                isEditing={isEditing}
                data={data}
                onEdit={onEdit}
                title={
                    <FormattedMessage
                        id="Interests.editDialog.title"
                        defaultMessage="Show your loved hobbies with fancy gifs!"
                    />
                }
            >
                {helpers => <GifsEditForm helpers={helpers} />}
            </EditDialog>
        </>
    );
};

export const GifsEditDialog = GifsEditDialogComponent;
