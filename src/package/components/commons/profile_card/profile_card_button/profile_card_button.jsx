import React, { useCallback } from 'react';

import injectSheet from 'react-jss';
import { animated, useSpring } from 'react-spring';

import { Button } from '@wld/ui';

import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrow-right.svg';

import { styles } from './profile_card_button_styles';
import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';

const DEFAULT_SPRING_PROPS = { translation: 0 };
const ACTIVE_SPRING_PROPS = { translation: 6 };

const ProfileCardButtonComponent = injectSheet(styles)(({ overrideColor, classes, children, ...other }) => {
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
                onFocus={setActiveSpringProps}
                onBlur={setDefaultSpringProps}
                {...other}
            >
                {children}
            </Button>
            <animated.span
                className={classes.arrowContainer}
                style={{
                    transform: springProps.translation.to(value => `translate3d(${value}px, 0, 0)`)
                }}
            >
                <ArrowRight className={classes.arrow} />
            </animated.span>
        </div>
    );
});

const InjectVariantProfileCardButton = props => {
    const [variant] = useCardVariant();
    return <ProfileCardButtonComponent {...props} variant={variant} />;
};

export const ProfileCardButton = InjectVariantProfileCardButton;
