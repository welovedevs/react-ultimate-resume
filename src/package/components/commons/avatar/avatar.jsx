import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './avatar_styles';

const useStyles = createUseStyles(styles);

const AvatarComponent = ({ imageSource = 'https://i.pravatar.cc/1000', displayedName }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img
                className={classes.image}
                src={imageSource}
                alt={displayedName}
            />
        </div>
    );
};

export const Avatar = AvatarComponent;
