import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import uuid from 'uuid/v4';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ProjectsFront } from './projects_front/projects_front';
import { ProjectsBack } from './projects_back/projects_back';
import { AddButton } from './add_button/add_button';
import { ProjectDialog } from './project_dialog/project_dialog';

import { useCallbackOpen } from '../../../hooks/use_callback_open';

import { mapProjectsFromJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const ProjectsCardComponent = ({ variant, side }) => {
    const { data, isEditing } = useContext(DeveloperProfileContext);
    const defaultMappedData = useMemo(() => mapProjectsFromJsonResume(data), [data]);
    const [mappedData, setMappedData] = useState(defaultMappedData);

    const [openNewProjectDialog, setNewProjectDialogOpened, setNewProjectDialogClosed] = useCallbackOpen();

    useEffect(() => {
        setMappedData(defaultMappedData);
    }, [defaultMappedData]);

    const handleAddButtonClick = useCallback(() => {
        setMappedData({
            projects: [
                ...mappedData.projects,
                {
                    id: uuid(),
                    name: 'Nouveau projet',
                    description: 'Description du nouveau projet...'
                }
            ]
        });
        setNewProjectDialogOpened();
    }, [mappedData]);

    return (
        <ProfileCard
            data={mappedData}
            isEditingProfile={isEditing}
            sides={{
                front: ProjectsFront,
                back: ProjectsBack
            }}
            variant={variant}
            side={side}
            customEditAction={(
                <AddButton
                    title="Ajouter un projet"
                    onClick={handleAddButtonClick}
                />
            )}
        >
            <ProjectDialog
                open={openNewProjectDialog}
                onClose={setNewProjectDialogClosed}
                project={mappedData?.projects?.[mappedData?.projects?.length - 1]}
            />
        </ProfileCard>
    );
};

export const ProjectsCard = ProjectsCardComponent;
