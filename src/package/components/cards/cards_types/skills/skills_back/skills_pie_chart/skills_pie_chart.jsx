import React, { useMemo } from 'react';
import { animated } from 'react-spring';
import { useTheme } from 'react-jss';
import { Cell, Pie, PieChart } from 'recharts';
import chroma from 'chroma-js';

import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';
import { CustomLabel } from '../utils/skills_back_recharts_utils';
import { useCardVariant } from '../../../../../commons/profile_card/profile_card_hooks/use_card_variant';

const GRAPH_HEIGHT = 250;
const GRAPH_PIE_RADIUS = 100;

const SkillsPieChart = ({ data, springOnOpenOpacityProps, springOnScrollOpacityProps, onAnimationEnd }) => {
    const theme = useTheme();
    const [variant] = useCardVariant();

    const { contentColor, backgroundColor } = useMemo(
        () => ({
            contentColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor)
        }),
        [theme, variant]
    );
    const colorPalette = useMemo(
        () => Array.from({ length: 3 }, (v, k) => chroma.mix(contentColor, backgroundColor, (2 * k) / 10).hex()),
        [contentColor, backgroundColor]
    );

    const width = theme?.components?.cards?.width;

    return (
        <animated.div style={{ opacity: springOnScrollOpacityProps.opacity }}>
            <PieChart width={width} height={GRAPH_HEIGHT}>
                <Pie
                    dataKey="value"
                    animationDuration={750}
                    labelLine={false}
                    label={shapeProps => (
                        <CustomLabel
                            customColor={contentColor}
                            springProps={springOnOpenOpacityProps}
                            {...shapeProps}
                        />
                    )}
                    data={data}
                    cx={width / 2}
                    cy={GRAPH_HEIGHT / 2}
                    outerRadius={GRAPH_PIE_RADIUS}
                    onAnimationEnd={onAnimationEnd}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colorPalette[index]} stroke={backgroundColor} />
                    ))}
                </Pie>
            </PieChart>
        </animated.div>
    );
};

export default SkillsPieChart;
