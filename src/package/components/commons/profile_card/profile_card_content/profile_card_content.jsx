import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_content_styles';

const useStyles = createUseStyles(styles);

const ProfileCardContentComponent = ({ cardVariant, component: Component = 'div', style, children, customClasses = {} }) => {
    const classes = useStyles({ cardVariant });
    return (
        <Component
            className={cn(classes.container, customClasses.container)}
            {...{ style }}
        >
            {children}
        </Component>
    );
};

export const ProfileCardContent = ProfileCardContentComponent;
