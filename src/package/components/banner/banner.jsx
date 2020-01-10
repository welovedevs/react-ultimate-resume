import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { UserActionsRow } from './user_actions_row/user_actions_row';

import { styles } from './banner_styles';

const useStyles = createUseStyles(styles);

const BannerComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.container}>
            <img className={classes.image} src={theme?.components?.banner?.imageSource} alt="Banner" />
            <div className={classes.overlay} />
            <UserActionsRow />
        </div>
    );
};

export const Banner = BannerComponent;
