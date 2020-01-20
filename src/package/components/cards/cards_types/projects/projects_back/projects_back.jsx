import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card_title/profile_card_title';

import { styles } from './projects_back_styles';

const useStyles = createUseStyles(styles);

const ProjectsBackComponent = () => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardTitle
                customClasses={{
                    container: classes.title,
                    typography: classes.typography
                }}
                beforeTypography={(
                    <div className={classes.background}>
                        <img className={classes.backgroundImage} src="https://source.unsplash.com/random/750x400" alt="Project Background" />
                    </div>
                )}
            >
                {'Projects'}
            </ProfileCardTitle>
        </>
    );
};

export const ProjectsBack = ProjectsBackComponent;
