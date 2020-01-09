import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './banner_styles';

const useStyles = createUseStyles(styles);

const BannerComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container} />
    );
}

export const Banner = BannerComponent;
