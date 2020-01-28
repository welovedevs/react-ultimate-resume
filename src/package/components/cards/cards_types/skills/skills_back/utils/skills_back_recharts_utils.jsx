import React from 'react';

import { animated } from 'react-spring';

const CustomLabel = props => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, customColor, outerRadius, springProps, name } = props;
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
            <animated.g style={springProps}>
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={customColor} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={customColor} stroke="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 8}
                    y={ey}
                    dy={5}
                    textAnchor={textAnchor}
                    fill={customColor}
                    fontWeight="500"
                >
                    {name}
                </text>
            </animated.g>
        </g>
    );
};

export { CustomLabel };
