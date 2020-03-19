import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useTransition } from 'react-spring';

import { useFormikContext } from 'formik';
import { Tooltip } from '@wld/ui';

import { useIsEditing } from '../../../../../../hooks/use_is_editing';
import { useOpenerState } from '../../../../../../hooks/use_opener_state';

import { ReactComponent as DeleteIcon } from '../../../../../../../assets/icons/trash.svg';

import { PROJECT_DIALOG_CONTENT_IMAGE_EDIT_LAYER_SPRING_PROPS } from './project_dialog_content_image_edit_layer_spring_props';
import { styles } from './project_dialog_content_image_styles';

const useStyles = createUseStyles(styles);

const ProjectDialogContentImageComponent = ({ component: Component = 'div', url, name, style, handleImageClick }) => {
    const classes = useStyles();
    const [isEditing] = useIsEditing();

    const [showEditLayer, eventsHandlerElementProps] = useOpenerState();

    const editLayerTransitions = useTransition(
        showEditLayer,
        item => `${item ? 'visible' : 'invisible'}_edit_layer`,
        PROJECT_DIALOG_CONTENT_IMAGE_EDIT_LAYER_SPRING_PROPS
    );

    return (
        <Component className={classes.container} style={style} {...(isEditing && eventsHandlerElementProps)}>
            <Image url={url} name={name} handleImageClick={handleImageClick} isEditing={isEditing} classes={classes} />
            {editLayerTransitions.map(
                ({ item, key, props }) => item && <EditLayer key={key} style={props} classes={classes} url={url} />
            )}
        </Component>
    );
};

const Image = ({ url, name, handleImageClick, isEditing, classes }) => {
    if (!isEditing) {
        return (
            <button className={classes.button} type="button" onClick={handleImageClick}>
                <img className={classes.image} src={url} alt={`Project ${name}`} />
            </button>
        );
    }
    return <img className={classes.image} src={url} alt={`Project ${name}`} />;
};

const EditLayer = ({ style, classes, url }) => {
    const { setFieldValue, values } = useFormikContext();

    const deleteImage = useCallback(() => {
        setFieldValue(
            'images',
            values.images.filter(({ url: urlToKeep }) => url !== urlToKeep)
        );
    }, [setFieldValue, values.images]);

    return (
        <animated.div className={classes.editLayer} style={style}>
            <Tooltip title="Supprimer cette image">
                <button className={classes.deleteButton} type="button" onClick={deleteImage}>
                    <DeleteIcon className={classes.deleteIcon} />
                </button>
            </Tooltip>
        </animated.div>
    );
};

export const ProjectDialogContentImage = ProjectDialogContentImageComponent;
