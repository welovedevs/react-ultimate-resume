import React from 'react';
import { createUseStyles } from 'react-jss';

import { ProgressBar } from '@wld/ui/progress_bar/progress_bar';
import { Typography } from '@wld/ui/typography/typography';


import { styles } from './other_skill_progress_styles';

const useStyles = createUseStyles(styles);

const OtherSkillProgress = ({ name, value }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography
                variant="h3"
                component="h3"
            >
                {name}
            </Typography>
            <ProgressBar />
        </div>
    );
};

export default OtherSkillProgress;
