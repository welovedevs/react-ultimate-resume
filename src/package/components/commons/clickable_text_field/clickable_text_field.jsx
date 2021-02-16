import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import { TextField, TextFieldIcon } from '@welovedevs/ui';

import { ReactComponent as KeyboardArrowDownIcon } from '../../../assets/icons/keyboard_arrow_down.svg';

import { styles } from './clickable_text_field_styles';

const useStyles = createUseStyles(styles);

const ClickableTextFieldComponent = ({
    interactionsLayerRef,
    onClick,
    textFieldIconProps,
    classes: receivedClasses = {},
    arrowRotation = 0,
    ...other
}) => {
    const classes = useStyles();
    return (
        <TextField readOnly className={cn(classes.container, receivedClasses.container)} {...other}>
            <motion.span
                animate={{
                    transform: `rotate(${arrowRotation}deg)`
                }}
                transition={{ type: 'spring' }}
            >
                <TextFieldIcon {...textFieldIconProps}>
                    <KeyboardArrowDownIcon />
                </TextFieldIcon>
            </motion.span>
            <button
                ref={interactionsLayerRef}
                className={cn(classes.handleInteractionsLayer, receivedClasses.handleInteractionsLayer)}
                type="button"
                {...{ onClick }}
            />
        </TextField>
    );
};

export const ClickableTextField = ClickableTextFieldComponent;
