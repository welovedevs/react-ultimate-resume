import * as React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './center_content_container_styles';

const useStyles = createUseStyles(styles);

const CenterContentContainerComponent = ({ children, minus = 0 }) => {
    const classes = useStyles({ minus });
    return <div className={classes.container}>{children}</div>;
};

export const CenterContentContainer = CenterContentContainerComponent;
