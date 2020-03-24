import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_section_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionComponent = ({ children, customClasses = {} }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    return <div className={cn(classes.container, customClasses.container)}>{children}</div>;
};

export const ProfileCardSection = ProfileCardSectionComponent;
