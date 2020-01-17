import React from 'react';

import { createUseStyles } from 'react-jss';

import { Button } from '@wld/ui';

import { styles } from './social_actions_styles';

const useStyles = createUseStyles(styles);

const SocialActionsComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Button style={{ color: '#fff' }} variant="outlined">
                {'Get in touch'}
            </Button>
        </div>
    );
};

export const SocialActions = SocialActionsComponent;
