import React, { useCallback, useMemo, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { animated, useTransition } from 'react-spring';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { ProjectDialogContentImage } from './project_dialog_content_image/project_dialog_content_image';
import { ProjectDialogContentAddImage } from './project_dialog_content_add_image/project_dialog_content_add_image';

import { useIsEditing } from '../../../../../hooks/use_is_editing';

import { PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS } from './project_dialog_content_images_transitions_spring_props';

import { styles } from './project_dialog_content_images_styles';
import { useCardVariant } from '../../../../../commons/profile_card/profile_card_hooks/use_card_variant';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';

const useStyles = createUseStyles(styles);

const ProjectDialogContentImagesComponent = ({ images }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [variant] = useCardVariant();
    const [isEditing] = useIsEditing();
    const [modalCarouselIndex, setModelCarouselIndex] = useState(null);

    const imagesEntries = useMemo(() => images && Object.entries(images), [images]);
    const views = useMemo(() => imagesEntries.map(([, { name, url }]) => ({ caption: name, src: url })), [imagesEntries]);

    const handleImageClick = useCallback((index) => () => {
        if (isEditing) {
            return;
        }
        setModelCarouselIndex(index);
    }, [isEditing]);

    const handleModalClose = useCallback(() => setModelCarouselIndex(null), []);

    const transitions = useTransition(imagesEntries, ([id]) => `project_image_${id}`, {
        ...PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS,
        ...(isEditing && {
            immediate: true,
            trail: 0
        })
    });

    const navButtonStyles = useCallback(base => ({
        ...base,
        backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor),
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.18)',
        color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
        '&:hover, &:active': {
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor),
            opacity: 1
        },
        '&:active': {
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
            transform: 'scale(0.96)'
        }
    }), [theme, variant]);

    return (
        <div className={classes.container}>
            {isEditing && <ProjectDialogContentAddImage />}
            {transitions.map(({ item, key, props }, index) => (
                <ProjectDialogContentImage
                    key={key}
                    component={isEditing ? animated.button : animated.div}
                    style={props}
                    url={item[1].url}
                    name={item[1].name}
                    handleImageClick={handleImageClick(index)}
                />
            ))}
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
