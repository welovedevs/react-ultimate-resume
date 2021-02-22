import React, { useCallback, useMemo, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { AnimatePresence, motion } from 'framer-motion';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { ProjectDialogContentImage } from './project_dialog_content_image/project_dialog_content_image';
import { ProjectDialogContentAddImage } from './project_dialog_content_add_image/project_dialog_content_add_image';

import { PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_PROPS } from './project_dialog_content_images_transitions_props';

import { styles } from './project_dialog_content_images_styles';
import { useCardVariant } from '../../../../../hooks/profile_card_hooks/use_card_variant';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';
import { hashCode } from '../../../../../../utils/string_utils';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../../utils/framer_motion/common_types/spring_type';

const useStyles = createUseStyles(styles);

const ProjectDialogContentImagesComponent = ({ images = [], isEditing }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [variant] = useCardVariant();
    const [modalCarouselIndex, setModelCarouselIndex] = useState(null);

    const views = useMemo(() => images.map(({ name, url }) => ({ caption: name, src: url })), [images]);

    const handleImageClick = useCallback(
        (index) => () => {
            if (isEditing) {
                return;
            }
            setModelCarouselIndex(index);
        },
        [isEditing]
    );

    const handleModalClose = useCallback(() => setModelCarouselIndex(null), []);

    const navButtonStyles = useCallback(
        (base) => ({
            ...base,
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor),
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.18)',
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
            '&:hover, &:active': {
                backgroundColor: getHexFromPaletteColor(
                    theme,
                    getColorsFromCardVariant(theme, variant).backgroundColor
                ),
                opacity: 1
            },
            '&:active': {
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
                transform: 'scale(0.96)'
            }
        }),
        [theme, variant]
    );
    return (
        <div className={classes.container}>
            {isEditing && <ProjectDialogContentAddImage />}
            <AnimatePresence>
                {images.map((item, index) => (
                    <ProjectDialogContentImage
                        key={`project_image_${index}_${hashCode(item.url)}`}
                        component={isEditing ? motion.button : motion.div}
                        motionConfig={{
                            variants: PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_PROPS,
                            initial: 'initial',
                            animate: 'animate',
                            exit: 'exit',
                            transition: spring
                        }}
                        url={item.url}
                        name={item.name}
                        handleImageClick={handleImageClick(index)}
                    />
                ))}
            </AnimatePresence>
            <ModalGateway>
                {modalCarouselIndex !== null && (
                    <Modal
                        onClose={handleModalClose}
                        styles={{
                            blanket: (base) => ({ ...base, zIndex: 2100 }),
                            positioner: (base) => ({ ...base, zIndex: 2110 }),
                            dialog: (base) => ({ ...base, zIndex: 2120, fontFamily: 'Avenir Next' })
                        }}
                    >
                        <Carousel
                            views={views}
                            currentIndex={modalCarouselIndex}
                            styles={{
                                navigationNext: navButtonStyles,
                                navigationPrev: navButtonStyles
                            }}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

export const ProjectDialogContentImages = ProjectDialogContentImagesComponent;
