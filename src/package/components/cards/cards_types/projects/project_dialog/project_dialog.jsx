import React, { useCallback, useContext, useMemo } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { useFormikContext } from 'formik';

import { ProjectDialogContentTitle } from './project_dialog_content_title/project_dialog_content_title';
import { ProjectDialogContentImages } from './project_dialog_content_images/project_dialog_content_images';
import { ProjectDialogContentDescription } from './project_dialog_content_description/project_dialog_content_description';
import { ProjectDialogContentDate } from './project_dialog_content_date/project_dialog_content_date';

import { styles } from './project_dialog_styles';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { ProjectValidator } from '../data/validator';
import { mapProjectToJsonResume, updateProjectsArray } from '../data/mapping';
import { ProjectDialogContentLink } from './project_dialog_content_link/project_dialog_content_link';
import { DeveloperProfileContext } from '../../../../../utils/context/contexts';

const useStyles = createUseStyles(styles);

const DEFAULT_OBJECT = {};
const ProjectDialogComponent = ({ open, onClose, data: project, isEditing }) => {
    const classes = useStyles();

    const { formatMessage } = useIntl();
    const { onEdit, data: resume } = useContext(DeveloperProfileContext);

    const onDialogEdited = useCallback(
        (editedData) => {
            const newProject = mapProjectToJsonResume(editedData);
            const newProjectArray = updateProjectsArray(newProject, resume);
            onEdit(newProjectArray);
            onClose();
        },
        [onEdit, resume]
    );

    const validator = useMemo(() => ProjectValidator(formatMessage), []);

    return (
        <EditDialog
            classes={{ content: classes.container, paper: classes.paper }}
            open={open}
            onClose={onClose}
            data={project || DEFAULT_OBJECT}
            onEdit={onDialogEdited}
            validationSchema={validator}
            isEditing={isEditing}
            title={<FormattedMessage id="Project.editDialog.title" defaultMessage="Project's details" />}
        >
            {() => <ProjectDialogContent isEditing={isEditing} />}
        </EditDialog>
    );
};

const ProjectDialogContent = ({ isEditing }) => {
    const classes = useStyles();

    const { values: project } = useFormikContext();
    return (
        <>
            <div className={classes.headrow}>
                <ProjectDialogContentTitle isEditing={isEditing} title={project.title} />
                <ProjectDialogContentDate isEditing={isEditing} date={project.data} />
            </div>
            <ProjectDialogContentDescription isEditing={isEditing} description={project.description} />
            <ProjectDialogContentLink isEditing={isEditing} link={project.link} />
            <ProjectDialogContentImages isEditing={isEditing} images={project.images} />
        </>
    );
};

export const ProjectDialog = ProjectDialogComponent;
