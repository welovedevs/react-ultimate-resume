import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { StudiesFront } from './studies_front/studies_front';
import { StudiesBack } from './studies_back/studies_back';

const StudiesCardComponent = ({ variant, flipped }) => (
        <ProfileCard
            sides={{
                front: StudiesFront,
                back: StudiesBack
            }}
            variant={variant}
            flipped={flipped}
        />
    );

export const StudiesCard = StudiesCardComponent;
