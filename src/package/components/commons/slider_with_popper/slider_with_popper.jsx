import { Slider, PopperCard } from '@wld/ui';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { sliderStyles } from './slider_with_popper_styles';

const useStyles = createUseStyles(sliderStyles);

export const SliderWithPopper = ({ color, name, value, onChange, min, max }) => {
    const classes = useStyles();
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);
    const timer = useRef();
    const thumbReference = useRef();
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);
    const handleChange = useCallback(
        e => {
            e.persist();
            const newValue = e.target.value;
            if (timer.current) {
                clearTimeout(timer.current);
            }
            setLocalValue(newValue);
            timer.current = setTimeout(() => onChange(e), 500);
        },
        [onChange]
    );

    return (
        <Slider
            classes={{ container: classes.slider }}
            color={color}
            name={name}
            value={localValue}
            onChange={handleChange}
            min={min}
            max={max}
            onMouseDown={handleFocus}
            onMouseUp={handleBlur}
            thumbReference={thumbReference}
            fullWidth
            thumbChildren={
                <PopperCard
                    open={isFocused}
                    anchorElement={thumbReference.current}
                    popperProps={{
                        disablePortal: true,
                        modifiers: {
                            preventOverflow: {
                                boundariesElement: 'viewport'
                            }
                        }
                    }}
                >
                    {localValue}
                </PopperCard>
            }
        />
    );
};
