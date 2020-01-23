import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { DreamJobFront } from './dream_job_front/dream_job_front';
import { DreamJobBack } from './dream_job_back/dream_job_back';

const DreamJobCardComponent = ({ variant, flipped }) => (
        <ProfileCard
            sides={{
                front: DreamJobFront,
                back: DreamJobBack
            }}
            variant={variant}
            flipped={flipped}
        />
    );

export const DreamJobCard = DreamJobCardComponent;
