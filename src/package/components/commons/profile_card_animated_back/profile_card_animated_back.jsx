import React, { useRef } from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useChain, useSpring } from 'react-spring';

import { ProfileCardTitle } from '../profile_card_title/profile_card_title';
import { ProfileCardContent } from '../profile_card_content/profile_card_content';

import {
    CONTENT_CONTAINER_SPRING_PROPS,
    CONTENT_SPRING_PROPS,
    TITLE_SPRING_PROPS
} from './profile_card_animated_back_springs';

import { styles } from './profile_card_animated_back_styles';

const useStyles = createUseStyles(styles);

const TRANSLATION_INTERPOLATION = (value) => `translate3d(0, ${value}%, 0)`;

const ProfileCardAnimatedBackComponent = ({ title, cardVariant, children: content }) => {
    const classes = useStyles();
    const contentContainerSpringReference = useRef();
    const contentSpringReference = useRef();
    const titleSpringReference = useRef();

    const contentContainerSpringProps = useSpring({
        from: CONTENT_CONTAINER_SPRING_PROPS.default,
        to: CONTENT_CONTAINER_SPRING_PROPS.active,
        ref: contentContainerSpringReference
    });

    const contentSpringProps = useSpring({
        from: CONTENT_SPRING_PROPS.default,
        to: CONTENT_SPRING_PROPS.active,
        ref: contentSpringReference
    });

    const titleSpringProps = useSpring({
        from: TITLE_SPRING_PROPS.default,
        to: TITLE_SPRING_PROPS.active,
        ref: titleSpringReference
    });

    useChain([contentContainerSpringReference, contentSpringReference], [0, 0.2]);
    useChain([contentContainerSpringReference, titleSpringReference], [0, 0.3]);

    return (
        <>
            <ProfileCardTitle
                cardVariant={cardVariant}
                component={animated.div}
                style={{
                    opacity: titleSpringProps.opacity,
                transform: titleSpringProps
                    .translation
                    .interpolate(TRANSLATION_INTERPOLATION)
            }}
            >
                {title}
            </ProfileCardTitle>
            <ProfileCardContent
                cardVariant={cardVariant}
                component={animated.div}
                style={{
                    transform: contentContainerSpringProps
                        .translation
                        .interpolate(TRANSLATION_INTERPOLATION)
                }}
            >
                <animated.div
                    style={{
                        transform: contentSpringProps
                            .translation
                            .interpolate(TRANSLATION_INTERPOLATION),
                        opacity: contentSpringProps.opacity
                    }}
                >
                    {content}
                </animated.div>
            </ProfileCardContent>
        </>
    );
};

export const ProfileCardAnimatedBack = ProfileCardAnimatedBackComponent;
