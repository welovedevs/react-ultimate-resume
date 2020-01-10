import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { styles } from './banner_styles';

const useStyles = createUseStyles(styles);

const BannerComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.container}>
            <img className={classes.image} src={theme?.components?.banner?.imageSrc} alt="Banner" />
            <div className={classes.overlay} />
        </div>
    );
};

export const Banner = BannerComponent;
