import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { StudiesFront } from './studies_front/studies_front';

const StudiesCardComponent = ({ variant, flipped }) => (
        <ProfileCard
            sides={{
                front: StudiesFront,
                back: () => null
            }}
            variant={variant}
            flipped={flipped}
        />
    );

export const StudiesCard = StudiesCardComponent;
