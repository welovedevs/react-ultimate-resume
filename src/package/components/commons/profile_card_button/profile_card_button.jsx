import React, { useCallback, useState } from 'react';

import injectSheet from 'react-jss';
import { animated, useSpring, config } from 'react-spring';

import { Button } from '@wld/ui';

import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';

import { styles } from './profile_card_button_styles';

const DEFAULT_SPRING_PROPS = { translation: 0 };
const ACTIVE_SPRING_PROPS = { translation: 6 };

const ProfileCardButtonComponent = injectSheet(styles)(({ children, classes, cardVariant, ...other }) => {
    const [springProps, setSpringProps] = useSpring(() => DEFAULT_SPRING_PROPS);
    const setDefaultSpringProps = useCallback(() => setSpringProps(() => DEFAULT_SPRING_PROPS), []);
    const setActiveSpringProps = useCallback(() => setSpringProps(() => ACTIVE_SPRING_PROPS), []);
    return (
        <div className={classes.container}>
            <Button
                customClasses={{ container: classes.button, typography: classes.typography }}
                size="small"
                variant="text"
                onMouseEnter={setActiveSpringProps}
                onMouseLeave={setDefaultSpringProps}
                {...other}
            >
                {children}
            </Button>
            <animated.span
                className={classes.arrowContainer}
                style={{
                    transform: springProps.translation.interpolate(value => `translate3d(${value}px, 0, 0)`)
                }}
            >
                <ArrowRight className={classes.arrow} />
            </animated.span>
        </div>
    );
});

export const ProfileCardButton = ProfileCardButtonComponent;
