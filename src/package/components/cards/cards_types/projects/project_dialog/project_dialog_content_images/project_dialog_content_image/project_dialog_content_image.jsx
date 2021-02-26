import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../../../utils/framer_motion/common_types/spring_type';

import { useFormikContext } from 'formik';
import { Tooltip } from '@welovedevs/ui';

import { useIsEditing } from '../../../../../../hooks/use_is_editing';
import { useOpenerState } from '../../../../../../hooks/use_opener_state';

import { ReactComponent as DeleteIcon } from '../../../../../../../assets/icons/trash.svg';

import { styles } from './project_dialog_content_image_styles';
import { OPACITY_TRANSITIONS } from '../../../../../../../utils/framer_motion/common_transitions/opacity_transitions';

const useStyles = createUseStyles(styles);

const ProjectDialogContentImageComponent = ({
    component: Component = 'div',
    url,
    name,
    motionConfig,
    handleImageClick
}) => {
    const classes = useStyles();
    const [isEditing] = useIsEditing();

    const [showEditLayer, eventsHandlerElementProps] = useOpenerState();

    return (
        <Component className={classes.container} {...motionConfig} {...(isEditing && eventsHandlerElementProps)}>
            <Image url={url} name={name} handleImageClick={handleImageClick} isEditing={isEditing} classes={classes} />
            <AnimatePresence>
                {showEditLayer && (
                    <EditLayer
                        motionConfig={{
                            variants: OPACITY_TRANSITIONS,
                            initial: 'initial',
                            animate: 'animate',
                            exit: 'exit',
                            transition: spring
                        }}
                        classes={classes}
                        url={url}
                    />
                )}
            </AnimatePresence>
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

const EditLayer = ({ classes, url, motionConfig }) => {
    const { setFieldValue, values } = useFormikContext();

    const deleteImage = useCallback(() => {
        setFieldValue(
            'images',
            values.images.filter(({ url: urlToKeep }) => url !== urlToKeep)
        );
    }, [setFieldValue, values.images]);

    return (
        <motion.div className={classes.editLayer} {...motionConfig}>
            <Tooltip title="Supprimer cette image">
                <button className={classes.deleteButton} type="button" onClick={deleteImage}>
                    <DeleteIcon className={classes.deleteIcon} />
                </button>
            </Tooltip>
        </motion.div>
    );
};

export const ProjectDialogContentImage = ProjectDialogContentImageComponent;
