import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { ProfileCardActions } from '../../../../commons/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card_button/profile_card_button';

import { styles } from './projects_front_styles';

const useStyles = createUseStyles(styles);

const ProjectsFrontComponent = ({ variant }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.background}>
                <img className={classes.backgroundImage} src="https://source.unsplash.com/random/750x400" alt="Project Background" />
            </div>
            <div className={classes.content}>
                <Typography variant="h2" component="h2" customClasses={{ container: classes.text }}>
                    My 🐶 project: Analytics data platform, 2019
                </Typography>
            </div>
            <ProfileCardActions>
                <ProfileCardButton cardVariant={variant}>
                    2 more projects
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const ProjectsFront = ProjectsFrontComponent;
