import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ProjectsFront } from './projects_front/projects_front';
import { ProjectsBack } from './projects_back/projects_back';

const ProjectsCardComponent = ({ variant, side }) => {
    return (
        <ProfileCard
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
