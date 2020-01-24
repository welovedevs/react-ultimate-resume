import React from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { DreamJobFront } from './dream_job_front/dream_job_front';
import { DreamJobBack } from './dream_job_back/dream_job_back';

const DreamJobCardComponent = ({ variant, side }) => (
        <ProfileCard
            sides={{
                front: DreamJobFront,
                back: DreamJobBack
            }}
            variant={variant}
            side={side}
        />
    );

export const DreamJobCard = DreamJobCardComponent;
