import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_section_styles';

const useStyles = createUseStyles(styles);

export const ProfileCardSection = ({ children, classes: receivedClasses = {} }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    return <div className={cn(classes.container, receivedClasses.container)}>{children}</div>;
};
