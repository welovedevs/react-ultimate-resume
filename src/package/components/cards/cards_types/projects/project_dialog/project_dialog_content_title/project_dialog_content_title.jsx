import React from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { TextField, Typography } from '@wld/ui';
import { useFormikContext } from 'formik';
import { styles } from './project_dialog_content_title_styles';

const useStyles = createUseStyles(styles);

const ProjectDialogContentTitleComponent = ({ title, isEditing }) => {
    const classes = useStyles({ isEditing });
    return (
        <div className={classes.container}>
            <Content title={title} isEditing={isEditing} classes={classes} />
        </div>
    );
};

const Content = ({ title, isEditing, classes }) => {
    if (isEditing) {
        return <EditingContent title={title} classes={classes} />;
    }
    return <DefaultContent title={title} classes={classes} />;
};

const DefaultContent = ({ title, classes }) => (
    <Typography variant="h2" component="h3" customClasses={{ container: classes.typography }}>
        {title}
    </Typography>
);

const EditingContent = ({ classes }) => {
    const { handleChange, values, errors } = useFormikContext();

    return (
        <>
            <Typography variant="label" component="div">
                <FormattedMessage id="Projects.dialog.content.title" defaultMessage="Project title" />
            </Typography>
            <TextField
                fullWidth
                variant="flat"
                onChange={handleChange}
                name="name"
                value={values.name}
                customClasses={{
                    container: classes.textField
                }}
            />
            {errors?.name && (
                <Typography color="danger" variant="helper" component="p">
                    {errors.name}
                </Typography>
            )}
        </>
    );
};

export const ProjectDialogContentTitle = ProjectDialogContentTitleComponent;
