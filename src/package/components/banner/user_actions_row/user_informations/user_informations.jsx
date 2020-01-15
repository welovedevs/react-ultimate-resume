import React from 'react';

import { createUseStyles } from 'react-jss';
import { Typography } from '@wld/ui/';

import { Avatar } from '../../../commons/avatar/avatar';
import { Column } from '../../../commons/column/column';

import { styles } from './user_informations_styles';

const useStyles = createUseStyles(styles);

const UserInformationsComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Avatar />
            <Column customClasses={{ container: classes.textColumn }}>
                <Typography
                    customClasses={{
                        container: classes.name
                    }}
                    variant="h3"
                    component="h3"
                >
                    Marie Bodin
                </Typography>
                <Typography
                    customClasses={{
                        container: classes.description
                    }}
                    variant="h4"
                    component="h4"
                >
                    Front-end developer
                </Typography>
            </Column>
        </div>
    );
};

export const UserInformations = UserInformationsComponent;
