import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './front_content_styles';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(styles);

export const BasicCardFront = ({ data }) => {
    const classes = useStyles();

    const { currentPosition, currentCity } = data;
    return (
        <div className={classes.section}>
            <FormattedMessage
                id="Basics.Front.MainPhrase"
                defaultMessage={'{currentPosition} based in {currentCity}'}
                values={{ currentCity, currentPosition }}
            />
        </div>
    );
};
