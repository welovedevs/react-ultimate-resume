import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { GifsFront } from './gifs_front/gifs_front';

const GifsCardComponent = ({ variant, flipped }) => (
    <ProfileCard
        sides={{
            front: GifsFront,
            back: () => null
        }}
        variant={variant}
        flipped={flipped}
    />
);

export const GifsCard = GifsCardComponent;
