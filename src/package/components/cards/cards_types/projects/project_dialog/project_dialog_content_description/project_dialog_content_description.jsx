import React from 'react';

import { createUseStyles } from 'react-jss';

import { TextField, Typography } from '@wld/ui';

import { useIsEditing } from '../../../../../hooks/use_is_editing';

import { styles } from './project_dialog_content_description_styles';
import { useFormikContext } from 'formik';

const useStyles = createUseStyles(styles);

const ProjectDialogContentDescriptionComponent = ({ description }) => {
    const [isEditing] = useIsEditing();
    const classes = useStyles({ isEditing });
    return (
        <div className={classes.container}>
            <Content description={description} isEditing={isEditing} classes={classes} />
        </div>
    );
};

const Content = ({ description, isEditing, classes }) => {
    if (isEditing) {
        return <EditingContent description={description} classes={classes} />;
    }
    return <DefaultContent description={description} classes={classes} />;
};

const DefaultContent = ({ description, classes }) => (
    <Typography customClasses={{ container: classes.typography }}>{description}</Typography>
);

const EditingContent = ({ classes }) => {
    const { handleChange, values, errors } = useFormikContext();

    return (
        <>
            <Typography variant="label" component="div">
                Description du projet
            </Typography>
            <TextField
                fullWidth
                multiline
                rows={8}
                variant="flat"
                onChange={handleChange}
                name="description"
                value={values.description}
                customClasses={{
                    container: classes.textField
                }}
            />
            {errors?.description && (
                <Typography color="danger" variant="helper" component="p">
                    {errors.description}
                </Typography>
            )}
        </>
    );
};

export const ProjectDialogContentDescription = ProjectDialogContentDescriptionComponent;
