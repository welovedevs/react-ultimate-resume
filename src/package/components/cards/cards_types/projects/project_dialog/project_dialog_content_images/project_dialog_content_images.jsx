import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useTransition } from 'react-spring';

import { Typography, Tooltip } from '@wld/ui';

import { ProjectDialogContentImage } from './project_dialog_content_image/project_dialog_content_image';

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
            {isEditing && <AddImage classes={classes} />}
            {transitions.map(({ item, key, props }) => (
                <ProjectDialogContentImage
                    key={key}
                    component={animated.div}
                    style={props}
                    url={item[1].url}
                    name={item[1].name}
                />
            ))}
        </div>
    );
};

const AddImage = ({ classes }) => (
    <Tooltip
        title="Ajouter une image"
    >
        <button type="button" className={classes.addImage}>
            <Typography variant="h2">
                +
            </Typography>
        </button>
    </Tooltip>
);

export const ProjectDialogContentImages = ProjectDialogContentImagesComponent;
