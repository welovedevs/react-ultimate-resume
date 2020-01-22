import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { GifsFront } from './gifs_front/gifs_front';
import { GifsBack } from './gifs_back/gifs_back';

const GifsCardComponent = ({ variant, flipped }) => (
    <ProfileCard
        sides={{
            front: GifsFront,
            back: GifsBack
        }}
        variant={variant}
        flipped={flipped}
    />
);

export const GifsCard = GifsCardComponent;
