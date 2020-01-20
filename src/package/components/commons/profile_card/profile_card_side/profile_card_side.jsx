import React from 'react';

import { createUseStyles } from 'react-jss';
import { animated } from 'react-spring';

import { styles } from './profile_card_side_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSideComponent = ({ style, children }) => {
    const classes = useStyles();
    return (
        <animated.div className={classes.container} style={style}>
            {children}
        </animated.div>
    );
};

export const ProfileCardSide = ProfileCardSideComponent;
