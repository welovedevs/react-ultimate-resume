import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { styles } from './language_column_styles';

const useStyles = createUseStyles(styles);

const LanguageColumnComponent = ({ component: Component = 'div', color, style, value, children }) => {
    const classes = useStyles({ value, color });

    return (
        <Component className={classes.container} style={style}>
            <Typography variant="h2" color="light" customClasses={{ container: classes.typography }}>
                {children}
            </Typography>
        </Component>
    );
};

export const LanguageColumn = LanguageColumnComponent;
