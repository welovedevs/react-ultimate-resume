import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ExperiencesFront } from './experiences_front/experiences_front';
import { ExperiencesBack } from './experiences_back/experiences_back';

const ExperiencesCardComponent = ({ variant, flipped }) => (
    <ProfileCard
        sides={{
            front: ExperiencesFront,
            back: ExperiencesBack
        }}
        variant={variant}
        flipped={flipped}
    />
);

export const ExperiencesCard = ExperiencesCardComponent;
