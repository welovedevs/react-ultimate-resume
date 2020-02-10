import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { SkillsEditForm } from './skills_edit_form/skills_edit_form';

import { styles } from './skills_edit_dialog_styles';

const useStyles = createUseStyles(styles);

const SkillsEditDialogComponent = ({ open, onClose, data, onEdit }) => {
    const classes = useStyles();
    return (
        <EditDialog
            fullScreen
            classes={{
                paper: classes.paper,
                content: classes.content,
                actions: classes.actions
            }}
            open={open}
            onClose={onClose}
            data={data}
            onEdit={onEdit}
            dialogClasses={{ dialog: { root: classes.dialogRoot, paper: classes.dialogPaper } }}
            title={<FormattedMessage id="Skills.editDialog.title" defaultMessage="What are your main skills?" />}
        >
            {helpers => <SkillsEditForm helpers={helpers} />}
        </EditDialog>
    );
};

export const SkillsEditDialog = SkillsEditDialogComponent;
