import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { styles } from './banner_styles';
import { UserInformations } from './user_actions_row/user_informations/user_informations';
import { SocialActions } from './user_actions_row/social_actions/social_actions';

const useStyles = createUseStyles(styles);

const BannerComponent = ({ children }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.container}>
            <div className={classes.overlay} />
            <img className={classes.image} src={theme?.components?.banner?.imageSource} alt="Banner" />
            <div className={classes.content}>
                <UserInformations />
                <SocialActions>{children}</SocialActions>
            </div>
        </div>
    );
};

export const Banner = BannerComponent;
