import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SoundtrackFront } from './soundtrack_front/soundtrack_front';
import { SoundtrackBack } from './soundtrack_back/soundtrack_back';

const SoundtrackCardComponent = ({ variant, side }) => (
        <ProfileCard
            sides={{
                front: SoundtrackFront,
                back: SoundtrackBack
            }}
            variant={variant}
            side={side}
            isTransitionUnique={false}
        />
    );

export const SoundtrackCard = SoundtrackCardComponent;
