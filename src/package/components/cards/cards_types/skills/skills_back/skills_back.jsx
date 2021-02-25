import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

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

    const hasSkill = useMemo(() => existsAndNotEmpty(data?.skills), [data]);

    const [onScrollOpacityProps, setSpringOnScrollOpacityProps] = useState(1);
    const [translationProps, setTranslationProps] = useState(0);

    const { top3Skills, othersSkills } = useMemo(() => {
        const newData = [...(data.skills ?? [])];
        const top3 = newData.splice(0, 3);
        return {
            top3Skills: top3,
            othersSkills: newData
        };
    }, [data]);

    const onScroll = useCallback(
        (e) => {
            const newOpacity = Math.max(1 - e.target.scrollTop / 60, 0);

            if (newOpacity === 0) {
                if (othersSkills.length > 10) {
                    setTranslationProps(-100);
                } else {
                    setTranslationProps(-100 + (e.target.scrollTop > 160 && e.target.scrollTop - 160));
                }
            } else {
                setTranslationProps(0);
            }

            return setSpringOnScrollOpacityProps(newOpacity);
        },
        [othersSkills]
    );

    if (!hasSkill) {
        return <NoSkill {...{ handleAddButtonClick }} />;
    }

    return (
        <div className={classes.container} onScroll={onScroll}>
            <SkillsPieChart variant={variant} data={top3Skills} onScrollOpacityProps={onScrollOpacityProps} />
            {othersSkills.length > 1 && (
                <OtherSkills
                    motionProps={{
                        animate: {
                            y: translationProps
                        }
                    }}
                    othersSkills={othersSkills}
                />
            )}
        </div>
    );
};
export const SkillsBack = memo(SkillsBackComponent);
