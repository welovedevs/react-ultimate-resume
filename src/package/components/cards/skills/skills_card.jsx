import React, { useMemo } from 'react';

const mapData = data => ({
    skills: (data.skills || [])
        .map(skill => {
            const level = Number(skill.level);
            if (Number.isNaN(skill.level)) {
                return skill;
            }
            return { ...skill, levelValue: level };
        })
        .sort(({ levelValue: a }, { levelValue: b }) => b - a)
});

export const SkillsCard = ({ data }) => {
    const mappedData = useMemo(() => mapData(data), [data]);
    return null;
};
