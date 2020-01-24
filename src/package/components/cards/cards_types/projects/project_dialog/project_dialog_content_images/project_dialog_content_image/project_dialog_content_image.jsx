import React from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useTransition } from 'react-spring';

import { useIsEditing } from '../../../../../../hooks/use_is_editing';

import { PROJECT_DIALOG_CONTENT_IMAGE_EDIT_LAYER_SPRING_PROPS } from './project_dialog_content_image_edit_layer_spring_props';

import { useOpenerState } from '../../../../../../hooks/use_opener_state';

import { styles } from './project_dialog_content_image_styles';

const useStyles = createUseStyles(styles);

const ProjectDialogContentImageComponent = ({ component: Component = 'div', url, name, style }) => {
    const classes = useStyles();
    const [isEditing] = useIsEditing();

    const [showEditLayer, eventsHandlerElementProps] = useOpenerState();

    const editLayerTransitions = useTransition(showEditLayer, item => `${item ? 'visible' : 'invisible'}_edit_layer`, PROJECT_DIALOG_CONTENT_IMAGE_EDIT_LAYER_SPRING_PROPS);

    return (
        <Component
            className={classes.container}
            style={style}
            {...isEditing && eventsHandlerElementProps}
        >
            <img className={classes.image} src={url} alt={`Project ${name}`} />
            {editLayerTransitions.map(({ item, key, props }) => item && (
                <EditLayer
                    key={key}
                    style={props}
                    classes={classes}
                />
            ))}
        </Component>
    );
};

const EditLayer = ({ style, classes }) => (
    <animated.div className={classes.editLayer} style={style} />
);

export const ProjectDialogContentImage = ProjectDialogContentImageComponent;
