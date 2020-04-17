import React, { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { PopperCard, Slider } from '@welovedevs/ui';

import { styles } from './slider_with_popper_styles';

const useStyles = createUseStyles(styles);

export const SliderWithPopper = ({
    color,
    name,
    value,
    onChange,
    min,
    max,
    debounce = 500,
    classes: receivedClasses = {},
    popperCardProps
}) => {
    const classes = useStyles();

    const [isFocused, setIsFocused] = useState(false);
    const [localValue, setLocalValue] = useState(value);

    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);

    const timer = useRef();
    const thumbReference = useRef();

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleChange = useCallback(
        (e) => {
            e.persist();
            const newValue = e.target.value;
            if (timer.current) {
                clearTimeout(timer.current);
            }
            setLocalValue(newValue);
            if (debounce) {
                timer.current = setTimeout(() => onChange(e), debounce);
            } else {
                onChange(e);
            }
        },
        [onChange]
    );

    return (
        <Slider
            classes={{
                container: cn(classes.container, receivedClasses.container)
            }}
            color={color}
            name={name}
            value={localValue}
            onChange={handleChange}
            min={min}
            max={max}
            onMouseDown={handleFocus}
            onMouseUp={handleBlur}
            thumbReference={thumbReference}
            thumbChildren={
                <PopperCard
                    open={isFocused}
                    anchorElement={thumbReference.current}
                    popperProps={{
                        disablePortal: true,
                        modifiers: {
                            preventOverflow: {
                                boundariesElement: 'viewport'
                            },
                            hide: {
                                enabled: false
                            }
                        }
                    }}
                    {...popperCardProps}
                >
                    {localValue}
                </PopperCard>
            }
        />
    );
};
