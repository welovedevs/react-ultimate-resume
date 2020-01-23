import React, { useMemo } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { ProgressBar } from '@wld/ui/progress_bar/progress_bar';
import { Typography } from '@wld/ui/typography/typography';


import { styles } from './other_skill_progress_styles';
import { getColorsFromCardVariant } from '../../../../../../utils/styles/styles_utils';

const useStyles = createUseStyles(styles);

const OtherSkillProgress = ({ variant, value, name }) => {
    const classes = useStyles({ cardVariant: variant });
    const theme = useTheme();
    const mainColor = useMemo(() => getColorsFromCardVariant(theme, variant).color, [theme, variant]);

    return (
        <div className={classes.container}>
            <Typography
                variant="h4"
                component="h4"
                color={mainColor}
                customClasses={{ container: classes.skillLabel }}
            >
                {name}
            </Typography>
            <ProgressBar
                customClasses={{ container: classes.progressBarCustomContainer, bar: classes.progressBarCustomBar }}
                value={value * 10}
                color={mainColor}
            />
        </div>
    );
};

export default OtherSkillProgress;
