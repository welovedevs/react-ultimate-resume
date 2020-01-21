import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { styles } from './skills_back_styles';

const useStyles = createUseStyles(styles);

const SkillsBackComponent = () => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardTitle>
                Skills
            </ProfileCardTitle>
        </>
    );
};

export const SkillsBack = SkillsBackComponent;
