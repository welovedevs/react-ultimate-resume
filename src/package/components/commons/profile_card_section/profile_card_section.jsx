import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_section_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionComponent = ({ cardVariant, children, customClasses = {} }) => {
    const classes = useStyles({ cardVariant });
    return (
        <div className={cn(classes.container, customClasses.container)}>
            {children}
        </div>
    );
};

export const ProfileCardSection = ProfileCardSectionComponent;
