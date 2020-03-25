import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { animated, useSpring } from 'react-spring';

import { TextField, TextFieldIcon } from '@wld/ui';

import { ReactComponent as KeyboardArrowDownIcon } from '../../../assets/icons/keyboard_arrow_down.svg';

import { styles } from './clickable_text_field_styles';

const useStyles = createUseStyles(styles);

const ClickableTextFieldComponent = ({
    interactionsLayerRef,
    onClick,
    textFieldIconProps,
    customClasses = {},
    arrowRotation = 0,
    ...other
}) => {
    const classes = useStyles();
    const { rotation: rotationSpring } = useSpring({ rotation: arrowRotation });
    return (
        <TextField readOnly className={cn(classes.container, customClasses.container)} {...other}>
            <animated.span
                style={{
                    transform: rotationSpring.to(value => `rotate(${value}deg)`)
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

export const ClickableTextField = ClickableTextFieldComponent;
