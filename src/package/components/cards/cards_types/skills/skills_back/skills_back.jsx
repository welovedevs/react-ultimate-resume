import React, { memo, useMemo } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { PieChart, Pie, Cell } from 'recharts';

import chroma from 'chroma-js';

import { useSpring, animated } from 'react-spring';
import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { styles } from './skills_back_styles';
import { CustomLabel } from './utils/skills_back_recharts_utils';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

const useStyles = createUseStyles(styles);

const data = [
    { name: 'React', value: 7, index: 0 },
    { name: 'Angular', value: 5, index: 1 },
    { name: 'Vue', value: 5, index: 2 },
    { name: 'Python', value: 8, index: 3 },
    { name: 'Autre', value: 7, index: 4 },
    { name: 'CSS', value: 4, index: 5 }];

const SkillsBackComponent = ({ variant }) => {
    const classes = useStyles();
    const theme = useTheme();

    const { contentColor, backgroundColor } = useMemo(() => ({
            contentColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor)
        }
    ), [theme, variant]);
    const { top3Skills, othersSkills } = useMemo(() => {
        const newData = [...data || []];
        const top3 = newData.splice(0, 3);
        return ({
            top3Skills: top3,
            othersSkills: newData
        });
    }, [data]);

    const [springProps, setSpringProps] = useSpring(() => ({ opacity: 0 }));
    const colorPalette = useMemo(() => Array.from({ length: 3 }, (v, k) => chroma.mix(contentColor, backgroundColor, (2 * k) / 10).hex()), [contentColor, backgroundColor]);

    return (
        <>
            <ProfileCardTitle>
                Skills
            </ProfileCardTitle>
            <div className={classes.container}>
                <PieChart width={470} height={300}>
                    <Pie
                        dataKey="value"
                        animationDuration={500}
                        labelLine={false}
                        label={(shapeProps) => (
                            <CustomLabel
                                customColor={contentColor}
                                springProps={springProps}
                                {...shapeProps}
                            />
                        )}
                        data={top3Skills}
                        cx={470 / 2}
                        cy={150}
                        innerRadius={0}
                        outerRadius={100}
                        onAnimationEnd={() => {
                            setSpringProps({ opacity: 1 });
                        }}

                    >
                        {
                            top3Skills.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorPalette[index]} stroke={backgroundColor}/>
                            ))
                        }
                    </Pie>
                </PieChart>
                <animated.div style={{ opacity: springProps.opacity }}>
                    {othersSkills.map(e => <div>{e.name}</div>)}
                </animated.div>
            </div>
        </>
    );
};
export const SkillsBack = memo(SkillsBackComponent);
