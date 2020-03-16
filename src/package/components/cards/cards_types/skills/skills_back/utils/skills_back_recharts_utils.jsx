import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { styles } from './skills_back_recharts_styles';
import { useTechnologies } from '../../../../../hooks/technologies/use_technologies';

const useStyles = createUseStyles(styles);

const CustomLabel = props => {
    const classes = useStyles();
    const { technologies } = useTechnologies();
    const { cx, cy, midAngle, customColor, outerRadius, name } = props;

    const techno = useMemo(() => {
        if (!technologies) {
            return null;
        }
        return technologies[name];
    }, [technologies, name]);

    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 25;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <g>
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={customColor} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={customColor} stroke="none" />
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
                <image
                    width="25"
                    height="25"
                    x={ex + (cos >= 0 ? 1.5 : -3) * 16}
                    y={ey - 36}
                    xlinkHref={`https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/${techno?.handle}`}
                />
            </g>
        </g>
    );
};

export { CustomLabel };
