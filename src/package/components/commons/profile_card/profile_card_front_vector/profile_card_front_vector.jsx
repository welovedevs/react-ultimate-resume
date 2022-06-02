import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './profile_card_front_vector_styles';

const useStyles = makeStyles(styles);

export const ProfileCardFrontVector = ({ vector: Vector, classes: receivedClasses = {} }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    return <Vector className={cn(classes.container, receivedClasses.container)} />;
};
