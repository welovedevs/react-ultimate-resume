import React from 'react';
import { createUseStyles } from 'react-jss';

import { ProgressBar } from '@wld/ui/progress_bar/progress_bar';
import { Typography } from '@wld/ui/typography/typography';

import { styles } from './other_skill_progress_styles';

const useStyles = createUseStyles(styles);

const OtherSkillProgress = ({ color, value, name }) => {
    const classes = useStyles({ color });
    return (
        <div className={classes.container}>
            <Typography variant="h4" component="h4" color={color} customClasses={{ container: classes.skillLabel }}>
                {name}
            </Typography>
            <ProgressBar
                customClasses={{ container: classes.progressBarCustomContainer, bar: classes.progressBarCustomBar }}
                value={value}
            />
        </div>
    );
};

export default OtherSkillProgress;
