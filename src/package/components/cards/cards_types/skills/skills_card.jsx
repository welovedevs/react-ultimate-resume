import React, { useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SkillsFront } from './skills_front/skills_front';
import { SkillsBack } from './skills_back/skills_back';

const mapData = data => ({
    skills: (data?.skills || [])
        .map(skill => {
            const level = Number(skill.level);
            if (Number.isNaN(skill.level)) {
                return skill;
            }
            return { ...skill, levelValue: level };
        })
        .sort(({ levelValue: a }, { levelValue: b }) => b - a)
});

const SkillsCardComponent = ({ data, variant, flipped }) => {
    const mappedData = useMemo(() => mapData(data), [data]);
    return (
        <ProfileCard
            sides={{
                front: SkillsFront,
                back: SkillsBack
            }}
            data={mappedData}
            variant={variant}
            flipped={flipped}
        />
    );
};

export const SkillsCard = SkillsCardComponent;
