import React, { useCallback, useContext, useEffect, useMemo } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { useFormikContext } from 'formik';

import { ProjectDialogContentTitle } from './project_dialog_content_title/project_dialog_content_title';
import { ProjectDialogContentImages } from './project_dialog_content_images/project_dialog_content_images';
import { ProjectDialogContentDescription } from './project_dialog_content_description/project_dialog_content_description';
import { ProjectDialogContentDate } from './project_dialog_content_date/project_dialog_content_date';

import { useHasDialogOpened } from '../../../../commons/profile_card/profile_card_hooks/use_card_has_dialog_opened';

import { styles } from './project_dialog_styles';
import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { ProjectValidator } from '../data/validator';
import { mapProjectToJsonResume, updateProjectsArray } from '../data/mapping';
import { ProjectDialogContentLink } from './project_dialog_content_link/project_dialog_content_link';
import { DeveloperProfileContext } from '../../../../../utils/context/contexts';

const useStyles = createUseStyles(styles);

const ProjectDialogComponent = ({ open, onClose, project = {} }) => {
    const classes = useStyles();

    const [, setHasDialogOpened] = useHasDialogOpened();
    const { formatMessage } = useIntl();
    const { onEdit, data } = useContext(DeveloperProfileContext);

    const onDialogEdited = useCallback(
        editedData => {
            onEdit(updateProjectsArray(mapProjectToJsonResume(editedData), data));
            onClose();
        },
        [data]
    );

    const validator = useMemo(() => ProjectValidator(formatMessage), []);
    useEffect(() => setHasDialogOpened(open), [open]);

    return (
        <EditDialog
            classes={{ content: classes.container, paper: classes.paper }}
            open={open}
            onClose={onClose}
            data={project}
            onEdit={onDialogEdited}
            validationSchema={validator}
            title={<FormattedMessage id="Project.editDialog.title" defaultMessage="Project's details" />}
        >
            {helpers => <ProjectDialogContent helpers={helpers} />}
        </EditDialog>
    );
};

const ProjectDialogContent = () => {
    const classes = useStyles();

    const { values: project } = useFormikContext();
    return (
        <>
            <div className={classes.headrow}>
                <ProjectDialogContentTitle title={project.title} />
                <ProjectDialogContentDate date={project.data} />
            </div>
            <ProjectDialogContentDescription description={project.description} />
            <ProjectDialogContentLink link={project.link} />
            <ProjectDialogContentImages images={project.images} />
        </>
    );
};

export const ProjectDialog = ProjectDialogComponent;
