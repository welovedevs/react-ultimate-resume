import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './column_styles';

const useStyles = createUseStyles(styles);

const ColumnComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export const Column = ColumnComponent;
