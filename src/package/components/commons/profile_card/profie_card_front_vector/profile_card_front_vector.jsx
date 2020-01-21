import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_front_vector_styles';

const useStyles = createUseStyles(styles);

const ProfileCardFrontVectorComponent = ({ vector: Vector, color, customClasses = {} }) => {
    const classes = useStyles({ color });
    return (
        <Vector
            className={
                cn(classes.container,
                    customClasses.container)
            }
        />
    );
};

export const ProfileCardFrontVector = ProfileCardFrontVectorComponent;
