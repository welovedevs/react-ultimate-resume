import React from 'react';

import { createUseStyles } from 'react-jss';
import { styles } from './skills_back_recharts_styles';

const useStyles = createUseStyles(styles);

const CustomLabel = props => {
    const classes = useStyles();
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, customColor, outerRadius, name } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 20;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <g>
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={customColor} fill="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 8}
                    y={ey}
                    dy={5}
                    textAnchor={textAnchor}
                    fill={customColor}
                    fontWeight="500"
                    className={classes.text}
                >
                    {name}
                </text>
            </g>
        </g>
    );
};

export { CustomLabel };
