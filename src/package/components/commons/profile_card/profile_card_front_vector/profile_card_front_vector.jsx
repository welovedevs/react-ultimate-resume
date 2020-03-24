import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_front_vector_styles';

const useStyles = createUseStyles(styles);

const ProfileCardFrontVectorComponent = ({ vector: Vector, customClasses = {} }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    return <Vector className={cn(classes.container, customClasses.container)} />;
};

export const ProfileCardFrontVector = ProfileCardFrontVectorComponent;
