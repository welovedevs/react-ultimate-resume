import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useTransition } from 'react-spring';

import { ProjectDialogContentImage } from './project_dialog_content_image/project_dialog_content_image';
import { ProjectDialogContentAddImage } from './project_dialog_content_add_image/project_dialog_content_add_image';

import { useIsEditing } from '../../../../../hooks/use_is_editing';

import { PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS } from './project_dialog_content_images_transitions_spring_props';

import { styles } from './project_dialog_content_images_styles';

const useStyles = createUseStyles(styles);

const ProjectDialogContentImagesComponent = ({ images }) => {
    const classes = useStyles();
    const [isEditing] = useIsEditing();

    const imagesEntries = useMemo(() => images && Object.entries(images), [images]);

    const transitions = useTransition(imagesEntries, ([id]) => `project_image_${id}`, {
        ...PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS,
        ...isEditing && {
            immediate: true,
            trail: 0
        }
    });

    return (
        <div className={classes.container}>
            {isEditing && <ProjectDialogContentAddImage />}
            {transitions.map(({ item, key, props }) => (
                <ProjectDialogContentImage
                    key={key}
                    component={isEditing ? animated.button : animated.div}
                    style={props}
                    url={item[1].url}
                    name={item[1].name}
                />
            ))}
        </div>
    );
};

export const ProjectDialogContentImages = ProjectDialogContentImagesComponent;
