import React, { memo, useCallback, useMemo, useRef } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { config, useSpring, useChain } from 'react-spring';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import SkillsPieChart from './skills_pie_chart/skills_pie_chart';
import OtherSkills from './other_skills/other_skills';

import { styles } from './skills_back_styles';
import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoSkill } from './no_skill/no_skill';

const useStyles = createUseStyles(styles);

const SkillsBackComponent = ({ data, handleAddButtonClick }) => (
    <>
        <ProfileCardTitle>
            <FormattedMessage id="Skills.back.title" defaultMessage="Skills" />
        </ProfileCardTitle>
        <Content {...{ data, handleAddButtonClick }} />
    </>
);

const Content = ({ data, handleAddButtonClick }) => {
    const [variant] = useCardVariant();

    const classes = useStyles({ variant });
    const springSkillOpacityPropsRef = useRef();
    const springGraphOpacityPropsRef = useRef();

    const hasSkill = useMemo(() => existsAndNotEmpty(data?.skills), [data]);

    const springSkillOpacityProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        ref: springSkillOpacityPropsRef
    });
    const springGraphOpacityProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        ref: springGraphOpacityPropsRef
    });

    useChain([springGraphOpacityPropsRef, springSkillOpacityPropsRef], [0, 0.1]);

    const [springOnScrollOpacityProps, setSpringOnScrollOpacityProps] = useSpring(() => ({
        opacity: 1
    }));
    const [springTranslationProps, setSpringTranslationProps] = useSpring(() => ({ yt: 0, config: config.slow }));

    const { top3Skills, othersSkills } = useMemo(() => {
        const newData = [...(data.skills ?? [])];
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

    if (!hasSkill) {
        return <NoSkill {...{ handleAddButtonClick }} />;
    }

    return (
        <div className={classes.container} onScroll={onScroll} style={springGraphOpacityProps}>
            <SkillsPieChart
                variant={variant}
                data={top3Skills}
                springOnScrollOpacityProps={springOnScrollOpacityProps}
            />
            {othersSkills.length > 1 && (
                <OtherSkills
                    style={springSkillOpacityProps}
                    othersSkills={othersSkills}
                    springTranslationProps={springTranslationProps}
                />
            )}
        </div>
    );
};
export const SkillsBack = memo(SkillsBackComponent);
