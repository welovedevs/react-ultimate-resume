import React from 'react';

import cn from 'classnames';
import injectSheet from 'react-jss';
import { animated, useSpring } from 'react-spring';

import { ReactComponent as KeyboardArrowDownIcon } from '../../../assets/icons/keyboard_arrow_down.svg';
import { TextField, TextFieldIcon } from '@wld/ui';

import styles from './clickable_text_field_styles';

const ClickableTextFieldComponent = ({
    interactionsLayerRef,
    onClick,
    textFieldIconProps,
    customClasses = {},
    arrowRotation = 0,
    classes,
    ...other
}) => {
    const { rotation: rotationSpring } = useSpring({ rotation: arrowRotation });
    return (
        <TextField readOnly className={cn(classes.container, customClasses.container)} {...other}>
            <animated.span
                style={{
                    transform: rotationSpring.interpolate(value => `rotate(${value}deg)`)
                }}
            >
                <TextFieldIcon {...textFieldIconProps}>
                    <KeyboardArrowDownIcon />
                </TextFieldIcon>
            </animated.span>
            <button
                ref={interactionsLayerRef}
                className={cn(classes.handleInteractionsLayer, customClasses.handleInteractionsLayer)}
                type="button"
                {...{ onClick }}
            />
        </TextField>
    );
};

export const ClickableTextField = injectSheet(styles)(ClickableTextFieldComponent);
