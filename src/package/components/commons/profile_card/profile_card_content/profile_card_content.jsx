import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_content_styles';

const useStyles = makeStyles(styles);

const ProfileCardContentComponent = ({
    component: Component = 'div',
    children,
    classes: receivedClasses = {},
    motionSettings
}) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    return (
        <Component className={cn(classes.container, receivedClasses.container)} {...motionSettings}>
            {children}
        </Component>
    );
};

export const ProfileCardContent = ProfileCardContentComponent;
