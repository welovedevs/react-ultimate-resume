import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { styles } from './gifs_sides_commons_styles';

const useStyles = createUseStyles(styles);

const GifsSidesCommonsComponent = ({ underLayer, children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.underLayerContainer}>
                {underLayer}
            </div>
            <div className={classes.darkenLayer} />
            <ProfileCardTitle customClasses={{ container: classes.title, typography: classes.titleTypography }}>
                Hobbies
            </ProfileCardTitle>
            {children}
        </div>
    );
};

export const GifsSidesCommons = GifsSidesCommonsComponent;
