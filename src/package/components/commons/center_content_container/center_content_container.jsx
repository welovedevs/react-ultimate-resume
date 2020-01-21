import * as React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './center_content_container_styles';

const useStyles = createUseStyles(styles);

const CenterContentContainerComponent = ({ customClasses = {}, children, minus = 0 }) => {
    const classes = useStyles({ minus });
    return <div className={cn(classes.container, customClasses.container)}>{children}</div>;
};

export const CenterContentContainer = CenterContentContainerComponent;
