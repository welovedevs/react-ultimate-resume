import React from 'react';
import { createUseStyles } from 'react-jss';

import styles from './card_styles';

const useStyles = createUseStyles(styles);
export const Card = ({ data, FrontComponent, BackComponent, flipped, moreText, ...other }) => {
    const classes = useStyles(other);

    return (
        <div className={classes.card}>
            <div>
                {!flipped && <FrontComponent data={data} />}
                {flipped && <BackComponent data={data} />}
            </div>
            {moreText && <div>{moreText}</div>}
        </div>
    );
};
