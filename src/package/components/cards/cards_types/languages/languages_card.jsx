import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { LanguagesFront } from './languages_front/languages_front';
import { LanguagesBack } from './languages_back/languages_back';

const LanguagesCardComponent = ({ variant, side }) => (
    <ProfileCard
        sides={{
            front: LanguagesFront,
            back: LanguagesBack
        }}
        variant={variant}
        side={side}
    />
);

export const LanguagesCard = LanguagesCardComponent;
