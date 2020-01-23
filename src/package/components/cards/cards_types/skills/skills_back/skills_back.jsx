import React, { memo, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useSpring } from 'react-spring';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { styles } from './skills_back_styles';


import SkillsPieChart from './skills_pie_chart/skills_pie_chart';
import OtherSkills from './other_skills/other_skills';

const useStyles = createUseStyles(styles);


const data = [
    { name: 'React', value: 7, index: 0 },
    { name: 'Angular', value: 5, index: 1 },
    { name: 'Vue', value: 5, index: 2 },
    { name: 'Python', value: 8, index: 3 },
    { name: 'Datamining', value: 7, index: 4 },
    { name: 'IA', value: 8, index: 5 },
    { name: 'LA DROGUE', value: 3, index: 6 },
    { name: 'CSS', value: 4, index: 7 }];

const SkillsBackComponent = ({ variant }) => {
    const classes = useStyles();

    const { top3Skills, othersSkills } = useMemo(() => {
        const newData = [...data || []];
        const top3 = newData.splice(0, 3);
        return ({
            top3Skills: top3,
            othersSkills: newData
        });
    }, [data]);

    const [springAnimationProps, setSpringAnimationProps] = useSpring(() => ({ opacity: 0 }));

    return (
        <>
            <ProfileCardTitle>
                Skills
            </ProfileCardTitle>
            <div className={classes.container}>
                <SkillsPieChart
                    variant={variant}
                    data={top3Skills}
                    labelSpringProps={springAnimationProps}
                    onAnimationEnd={() => setSpringAnimationProps({ opacity: 1 })}
                />
                <OtherSkills
                    variant={variant}
                    othersSkills={othersSkills}
                    springProps={springAnimationProps}
                />
            </div>
        </>
    );
};
export const SkillsBack = memo(SkillsBackComponent);
