import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SoundtrackFront } from './soundtrack_front/soundtrack_front';
import { SoundtrackBack } from './soundtrack_back/soundtrack_back';

import { styles } from './soundtrack_card_styles';

const useStyles = createUseStyles(styles);

const SoundtrackCardComponent = ({ variant, flipped }) => {
    const classes = useStyles();
    return (
        <ProfileCard
            sides={{
                front: SoundtrackFront,
                back: SoundtrackBack
            }}
            variant={variant}
            flipped={flipped}
        />
    );
};

export const SoundtrackCard = SoundtrackCardComponent;
