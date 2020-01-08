import React from 'react';
import { createUseStyles } from 'react-jss';

import styles from './card_styles';

const useStyles = createUseStyles(styles);
export const Card = ({ data, FrontComponent, BackComponent, ...other }) => {
    const classes = useStyles(other);

    return (
        <div className={classes.card}>
            <FrontComponent data={data} />
            <BackComponent data={data} />
        </div>
    );
};
