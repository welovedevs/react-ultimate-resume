import React, { memo, useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { useSpring, config } from 'react-spring';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import SkillsPieChart from './skills_pie_chart/skills_pie_chart';
import OtherSkills from './other_skills/other_skills';

import { styles } from './skills_back_styles';

const useStyles = createUseStyles(styles);

const data = [
    { name: 'React', value: 7, index: 0 },
    { name: 'Angular', value: 5, index: 1 },
    { name: 'Vue', value: 5, index: 2 },
    { name: 'Python', value: 8, index: 3 }
];

const SkillsBackComponent = () => {
    const variant = 0;

    const classes = useStyles({ variant });
    const [springOnOpenOpacityProps, setSpringOnOpenOpacityProps] = useSpring(() => ({ opacity: 0 }));
    const [springOnScrollOpacityProps, setSpringOnScrollOpacityProps] = useSpring(() => ({ opacity: 1 }));
    const [springTranslationProps, setSpringTranslationProps] = useSpring(() => ({ yt: 0, config: config.slow }));

    const { top3Skills, othersSkills } = useMemo(() => {
        const newData = [...(data || [])];
        const top3 = newData.splice(0, 3);
        return {
            top3Skills: top3,
            othersSkills: newData
        };
    }, [data]);

    const onScroll = useCallback(
        e => {
            const newOpacity = Math.max(1 - e.target.scrollTop / 60, 0);

            if (newOpacity === 0) {
                if (othersSkills.length > 10) {
                    setSpringTranslationProps({ yt: -100 });
                } else {
                    setSpringTranslationProps({ yt: -100 + (e.target.scrollTop > 160 && e.target.scrollTop - 160) });
                }
            } else {
                setSpringTranslationProps({ yt: 0 });
            }

            return setSpringOnScrollOpacityProps({ opacity: newOpacity });
        },
        [othersSkills]
    );
    const onAnimationEnd = useCallback(
        () => console.log('Animation Ended') || setSpringOnOpenOpacityProps({ opacity: 1 }),
        []
    );

    return (
        <>
            <ProfileCardTitle>Skills</ProfileCardTitle>
            <div className={classes.container} onScroll={onScroll}>
                <SkillsPieChart
                    data={top3Skills}
                    springOnScrollOpacityProps={springOnScrollOpacityProps}
                    springOnOpenOpacityProps={springOnOpenOpacityProps}
                    onAnimationEnd={onAnimationEnd}
                />
                <OtherSkills
                    othersSkills={othersSkills}
                    springOnOpenOpacityProps={springOnOpenOpacityProps}
                    springTranslationProps={springTranslationProps}
                />
            </div>
        </>
    );
};
export const SkillsBack = memo(SkillsBackComponent);
