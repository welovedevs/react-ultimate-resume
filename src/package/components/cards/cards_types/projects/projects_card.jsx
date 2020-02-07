import React, { useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ProjectsFront } from './projects_front/projects_front';
import { ProjectsBack } from './projects_back/projects_back';
import { DeveloperProfileContext } from '../../../profile';
import { mapProjectsFromJsonResume } from './data/mapping';

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
        />
    );
};

export const ProjectsCard = ProjectsCardComponent;
