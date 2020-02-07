import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Tooltip, Typography } from '@wld/ui';

import { styles } from './add_button_dashed_styles';

const useStyles = createUseStyles(styles);

const AddButtonDashedComponent = ({ onClick, title = 'Add', classes: receivedClasses = {} }) => {
    const classes = useStyles();
    console.log({ receivedClasses });
    return (
        <Tooltip title={title}>
            <button
                type="button"
                className={cn(classes.container, receivedClasses.container)}
                onClick={onClick}
            >
                <Typography
                    customClasses={{ container: receivedClasses.typography }}
                    variant="h2"
                >
                    {'+'}
                </Typography>
            </button>
        </Tooltip>
    );
};

export const AddButtonDashed = AddButtonDashedComponent;
