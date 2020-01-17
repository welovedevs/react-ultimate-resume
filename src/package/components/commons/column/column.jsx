import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './column_styles';

const useStyles = createUseStyles(styles);

const ColumnComponent = ({ children, customClasses = {} }) => {
    const classes = useStyles();
    return <div className={cn(classes.container, customClasses.container)}>{children}</div>;
};

export const Column = ColumnComponent;
