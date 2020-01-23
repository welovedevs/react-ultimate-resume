import { Cell, Pie, PieChart } from 'recharts';
import { CustomLabel } from '../utils/skills_back_recharts_utils';
import React from 'react';
import { useTheme } from 'react-jss';


const GRAPH_HEIGHT = 300;
const GRAPH_PIE_RADIUS = 100;

const SkillsPieChart = ({ data, colorPalette, contentColor, backgroundColor, labelSpringProps, onAnimationEnd }) => {
    const theme = useTheme();

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
