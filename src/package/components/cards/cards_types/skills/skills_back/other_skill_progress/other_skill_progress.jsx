import React from 'react';
import { createUseStyles } from 'react-jss';

import { ProgressBar } from '@welovedevs/ui/progress_bar/progress_bar';
import { Typography } from '@welovedevs/ui/typography/typography';

import { styles } from './other_skill_progress_styles';

const useStyles = createUseStyles(styles);

const OtherSkillProgress = ({ color, value, name }) => {
    const classes = useStyles({ color });
    return (
        <div className={classes.container}>
            <Typography variant="h4" component="h4" color={color} classes={{ container: classes.skillLabel }}>
                {name}
            </Typography>
            <ProgressBar
                classes={{ container: classes.progressBarCustomContainer, bar: classes.progressBarCustomBar }}
                value={value}
            />
        </div>
    );
};

export default OtherSkillProgress;
