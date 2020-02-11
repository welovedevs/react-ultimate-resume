import React, { useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ProjectsFront } from './projects_front/projects_front';
import { ProjectsBack } from './projects_back/projects_back';
import { DeveloperProfileContext } from '../../../profile';
import { mapProjectsFromJsonResume } from './data/mapping';
import { AddButton } from './add_button/add_button';

const ProjectsCardComponent = ({ variant, side }) => {
    const { data, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapProjectsFromJsonResume(data), [data]);

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
                    onClick={alert}
                />
            )}
        />
    );
};

export const ProjectsCard = ProjectsCardComponent;
