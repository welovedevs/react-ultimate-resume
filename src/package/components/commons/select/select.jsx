import React, { cloneElement, useCallback, useState } from 'react';

import injectSheet from 'react-jss';

import { Menu } from '@material-ui/core';
import { ClickableTextField } from '../clickable_text_field/clickable_text_field';

import styles from './select_styles';

function getValueFromChildren(children, value) {
    const selectedChild = children.map((child) => child.props || {}).find((childProps) => childProps.value === value);
    if (selectedChild && typeof selectedChild.children === 'string') {
        return selectedChild.children;
    }
    return value;
}

const SelectComponent = ({
    disabled,
    fullWidth,
    className,
    value,
    onChange,
    onClose,
    onMouseOver,
    onFocus,
    textFieldProps,
    textFieldIconProps,
    children,
    id
}) => {
    const [anchorElement, setAnchorElement] = useState();
    const handleClose = useCallback(() => {
        if (onClose) {
            onClose();
        }
        return setAnchorElement(null);
    }, []);
    const setAnchorElementCallback = useCallback((e) => !disabled && setAnchorElement(e.currentTarget), [disabled]);

    const selectedChildValue = getValueFromChildren(children, value);
    return (
        <>
            <Menu anchorEl={anchorElement} keepMounted open={Boolean(anchorElement)} onClose={handleClose}>
                {React.Children.map(children, (child) =>
                    cloneElement(child, {
                        onClick: () => {
                            if (onChange) {
                                onChange(child.props.value);
                            }
                            setAnchorElement(null);
                        },
                        onMouseOver: () => {
                            if (onMouseOver) {
                                onMouseOver(child.props.value);
                            }
                        },
                        onFocus: () => {
                            if (onFocus) {
                                onFocus(child.props.value);
                            }
                        }
                    })
                )}
            </Menu>
            <ClickableTextField
                classes={{
                    container: className
                }}
                value={selectedChildValue}
                onClick={setAnchorElementCallback}
                arrowRotation={anchorElement ? -90 : 0}
                {...{ id, textFieldIconProps, fullWidth, disabled }}
                {...textFieldProps}
            />
        </>
    );
};

export const Select = injectSheet(styles)(SelectComponent);
