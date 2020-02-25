import React, { useContext } from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { Avatar } from '../../../commons/avatar/avatar';
import { Column } from '../../../commons/column/column';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

import { styles } from './user_informations_styles';

const useStyles = createUseStyles(styles);

const UserInformationsComponent = () => {
    const { data } = useContext(DeveloperProfileContext);

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Avatar src={data.basics?.picture} />
            <Column customClasses={{ container: classes.textColumn }}>
                <Typography
                    customClasses={{
                        container: classes.name
                    }}
                    variant="h3"
                    component="h3"
                >
                   {data.basics?.name}
                </Typography>
                <Typography
                    customClasses={{
                        container: classes.description
                    }}
                    variant="h4"
                    component="h4"
                >
                    {data.basics?.label}
                </Typography>
            </Column>
        </div>
    );
};

export const UserInformations = UserInformationsComponent;
