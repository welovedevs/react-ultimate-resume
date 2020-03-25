import React, { useCallback } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { animated, useSpring } from 'react-spring';

import { Tooltip } from '@wld/ui';

import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';

import { SPRING_PROPS } from './bouncing_round_button_spring_props';

import { styles } from './bouncing_round_button_styles';

const useStyles = createUseStyles(styles);

const BouncingRoundButtonComponent = ({
    title = 'Click me!',
    tooltipPlacement = 'top',
    onClick,
    icon: Icon = EditIcon,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles();
    const [springProps, setSpringProps] = useSpring(() => SPRING_PROPS.default);

    const handleMouseDown = useCallback(() => setSpringProps(SPRING_PROPS.active), []);
    const handleMouseUp = useCallback(() => setSpringProps(SPRING_PROPS.default), []);

    return (
        <Tooltip title={title} placement={tooltipPlacement}>
            <animated.button
                type="button"
                className={cn(classes.container, receivedClasses.container)}
                onClick={onClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    transform: springProps.scale.to(value => `scale3d(${value}, ${value}, ${value})`)
                }}
            >
                <Icon className={cn(classes.icon, classes.iconContainer)} />
            </animated.button>
        </Tooltip>
    );
};

export const BouncingRoundButton = BouncingRoundButtonComponent;
