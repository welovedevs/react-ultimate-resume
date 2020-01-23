import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { LanguagesFront } from './languages_front/languages_front';
import { LanguagesBack } from './languages_back/languages_back';

const LanguagesCardComponent = ({ variant, flipped }) => (
    <ProfileCard
        sides={{
            front: LanguagesFront,
            back: LanguagesBack
        }}
        variant={variant}
        flipped={flipped}
    />
);

export const LanguagesCard = LanguagesCardComponent;
