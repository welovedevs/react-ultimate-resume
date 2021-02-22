import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { createUseStyles, useTheme } from 'react-jss';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import chroma from 'chroma-js';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';
import { CustomLabel } from '../utils/skills_back_recharts_utils';
import { styles } from './skills_pie_chart_styles';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../../utils/framer_motion/common_types/spring_type';

// const GRAPH_PIE_RADIUS = 100;

const useStyles = createUseStyles(styles);
const SkillsPieChart = ({ data, variant, springOnOpenOpacityProps, onScrollOpacityProps }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

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

    return (
        <motion.div
            // ref={wrapperRef}
            className={classes.wrapper}
            animate={{ opacity: onScrollOpacityProps }}
            transition={spring}
        >
            <ResponsiveContainer height="100%" width="100%">
                <PieChart>
                    <Pie
                        isAnimationActive={false}
                        dataKey="value"
                        labelLine={false}
                        label={(shapeProps) => (
                            <CustomLabel
                                customColor={contentColor}
                                springProps={springOnOpenOpacityProps}
                                {...shapeProps}
                            />
                        )}
                        data={data}
                        outerRadius={isMobile ? '50%' : '70%'}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colorPalette[index]} stroke={backgroundColor} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

export default SkillsPieChart;
