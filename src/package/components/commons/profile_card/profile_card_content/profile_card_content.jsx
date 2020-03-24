import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_content_styles';

const useStyles = createUseStyles(styles);

const ProfileCardContentComponent = ({ component: Component = 'div', style, children, customClasses = {} }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    return (
        <Component className={cn(classes.container, customClasses.container)} {...{ style }}>
            {children}
        </Component>
    );
};

export const ProfileCardContent = ProfileCardContentComponent;
