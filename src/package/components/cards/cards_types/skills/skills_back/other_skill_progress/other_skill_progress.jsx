import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import { ProgressBar } from '@welovedevs/ui';
import { Typography } from '@welovedevs/ui';

import { styles } from './other_skill_progress_styles';

const useStyles = makeStyles(styles);

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
