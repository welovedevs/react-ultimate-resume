import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { useAdditionalNodes } from '../../hooks/use_additional_nodes';
import { useReceivedGlobalClasses } from '../../hooks/use_received_global_classes';

import { styles } from './avatar_styles';

const useStyles = createUseStyles(styles);

const AvatarComponent = ({ src = 'https://i.pravatar.cc/1000', displayedName }) => {
    const classes = useStyles();
    const [receivedGlobalClasses] = useReceivedGlobalClasses('banner.avatar');
    const [nodes] = useAdditionalNodes('banner.avatar', null);
    return (
        <div className={cn(classes.container, receivedGlobalClasses.container)}>
            <div className={cn(classes.imageContainer, classes.imageContainer)}>
                <img className={cn(classes.image, receivedGlobalClasses.image)} src={src} alt={displayedName} />
            </div>
            {nodes}
        </div>
    );
};

export const Avatar = AvatarComponent;
