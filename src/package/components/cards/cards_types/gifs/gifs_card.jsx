import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { GifsFront } from './gifs_front/gifs_front';
import { GifsBack } from './gifs_back/gifs_back';

const GifsCardComponent = ({ variant, side }) => (
    <ProfileCard
        sides={{
            front: GifsFront,
            back: GifsBack
        }}
        variant={variant}
        side={side}
    />
);

export const GifsCard = GifsCardComponent;
