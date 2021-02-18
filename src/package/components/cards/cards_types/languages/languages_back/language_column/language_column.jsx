import React from 'react';

import { createUseStyles } from 'react-jss';

import { Tooltip, Typography } from '@welovedevs/ui';

import { styles } from './language_column_styles';

const useStyles = createUseStyles(styles);

const LanguageColumnComponent = ({
    component: Component = 'div',
    color,
    style,
    motionConfig,
    item: { value, language } = {},
    children,
    itemsSize
}) => {
    const classes = useStyles({ value, color, itemsSize });
    return (
        <Tooltip open classes={{ container: classes.popper }} title={`${language} : ${value}%`}>
            <Component className={classes.container} {...motionConfig} style={style}>
                <Typography variant="h2" color="light" classes={{ container: classes.typography }}>
                    {children}
                </Typography>
            </Component>
        </Tooltip>
    );
};

export const LanguageColumn = LanguageColumnComponent;
