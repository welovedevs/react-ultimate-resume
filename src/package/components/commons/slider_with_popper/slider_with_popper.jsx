import { Slider, PopperCard } from '@wld/ui';
import React, { useCallback, useRef, useState } from 'react';

export const SliderWithPopper = ({ color, name, value, onChange, min, max }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);
    const timer = useRef();
    const thumbReference = useRef();
    const [localValue, setLocalValue] = useState(value);

    const handleChange = useCallback(
        e => {
            e.persist()
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
            color={color}
            name={name}
            value={localValue}
            onChange={handleChange}
            min={min}
            max={max}
            onMouseDown={handleFocus}
            onMouseUp={handleBlur}
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
