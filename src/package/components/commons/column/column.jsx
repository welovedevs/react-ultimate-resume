import React from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { styles } from './column_styles';

const useStyles = makeStyles(styles);

const ColumnComponent = ({ children, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return <div className={cn(classes.container, receivedClasses.container)}>{children}</div>;
};

export const Column = ColumnComponent;
