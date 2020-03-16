import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './avatar_styles';
import { useAdditionalNodes } from '../../hooks/use_additional_nodes';

const useStyles = createUseStyles(styles);

const AvatarComponent = ({ src = 'https://i.pravatar.cc/1000', displayedName }) => {
    const classes = useStyles();
    const [nodes] = useAdditionalNodes('banner.avatar', null);
    return (
        <div className={classes.container}>
            <img className={classes.image} src={src} alt={displayedName} />
            {nodes}
        </div>
    );
};

export const Avatar = AvatarComponent;
