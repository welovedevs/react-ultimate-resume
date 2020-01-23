import { Cell, Pie, PieChart } from 'recharts';
import chroma from 'chroma-js';
import React, { useMemo } from 'react';
import { useTheme } from 'react-jss';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';
import { CustomLabel } from '../utils/skills_back_recharts_utils';


const GRAPH_HEIGHT = 250;
const GRAPH_PIE_RADIUS = 100;

const SkillsPieChart = ({ data, variant, labelSpringProps, onAnimationEnd }) => {
    const theme = useTheme();

    const { contentColor, backgroundColor } = useMemo(() => ({
            contentColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor)
        }
    ), [theme, variant]);
    const colorPalette = useMemo(() => Array.from({ length: 3 }, (v, k) => chroma.mix(contentColor, backgroundColor, (2 * k) / 10).hex()), [contentColor, backgroundColor]);


    return (
        <PieChart width={theme.components.cards.width} height={GRAPH_HEIGHT}>
            <Pie
                dataKey="value"
                animationDuration={500}
                labelLine={false}
                label={(shapeProps) => (
                    <CustomLabel
                        customColor={contentColor}
                        springProps={labelSpringProps}
                        {...shapeProps}
                    />
                )}
                data={data}
                cx={theme.components.cards.width / 2}
                cy={GRAPH_HEIGHT / 2}
                outerRadius={GRAPH_PIE_RADIUS}
                onAnimationEnd={onAnimationEnd}

            >
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colorPalette[index]} stroke={backgroundColor}/>
                    ))
                }
            </Pie>
        </PieChart>);
};

export default SkillsPieChart;
