import React from 'react';

import { createUseStyles } from 'react-jss';

import { InterestedByFront } from '../interested_by_front/interested_by_front';

import { styles } from './interested_by_back_styles';

const useStyles = createUseStyles(styles);

const InterestedByBackComponent = (props) => {
    const { variant } = props;
    const classes = useStyles({ variant });
    return (
        <InterestedByFront
            customClasses={{
                container: classes.container
            }}
            {...props}
        />
    );
};

export const InterestedByBack = InterestedByBackComponent;
