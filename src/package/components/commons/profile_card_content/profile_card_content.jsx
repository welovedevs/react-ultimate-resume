import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_content_styles';

const useStyles = createUseStyles(styles);

const ProfileCardContentComponent = ({ component: Component = 'div', style, children }) => {
    const classes = useStyles(styles);
    return (
        <Component className={classes.container} {...{ style }}>
            {children}
        </Component>
    );
};

export const ProfileCardContent = ProfileCardContentComponent;
