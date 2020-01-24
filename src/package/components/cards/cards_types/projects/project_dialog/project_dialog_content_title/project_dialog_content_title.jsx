import React from 'react';

import { createUseStyles } from 'react-jss';

import { TextField, Typography } from '@wld/ui';

import { useIsEditing } from '../../../../../hooks/use_is_editing';

import { styles } from './project_dialog_content_title_styles';

const useStyles = createUseStyles(styles);

const ProjectDialogContentTitleComponent = ({ title }) => {
    const [isEditing] = useIsEditing();
    const classes = useStyles({ isEditing });
    return (
        <div className={classes.container}>
            <Content title={title} isEditing={isEditing} classes={classes} />
        </div>
    );
};

const Content = ({ title, isEditing, classes }) => {
    if (isEditing) {
        return (
            <EditingContent title={title} classes={classes} />
        );
    }
    return <DefaultContent title={title} classes={classes} />;
};

const DefaultContent = ({ title, classes }) => (
    <Typography
        variant="h2"
        component="h3"
        customClasses={{ container: classes.typography }}
    >
        {title}
    </Typography>
);

const EditingContent = ({ title, classes }) => (
        <>
            <Typography
                variant="label"
                component="div"
            >
                Titre du projet
            </Typography>
            <TextField
                fullWidth
                variant="flat"
                value={title}
                customClasses={{
                    container: classes.textField
                }}
            />
        </>
    );

export const ProjectDialogContentTitle = ProjectDialogContentTitleComponent;
