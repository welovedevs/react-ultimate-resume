import React from 'react';

import cn from 'classnames';

export const PaletteVisual = ({ palette, classes: receivedClasses = {} }) => {
    return (
        <div className={cn('flex gap-0.5', receivedClasses.container)}>
            {Object.entries(palette ?? {}).map(([key, { 500: hex }]) => (
                <div
                    key={`palette_visual_color_${key}_${hex}`}
                    className={cn('bg-current  w-5 h-5 rounded-sm drop-shadow', receivedClasses.color)}
                    style={{ color: hex }}
                />
            ))}
        </div>
    );
};
