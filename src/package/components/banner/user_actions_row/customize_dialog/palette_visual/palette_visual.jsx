import React, { useMemo } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { Tooltip } from '@wld/ui';

import { PALETTE_KEY_TRANSLATIONS } from './palette_visual_translations';

import { styles } from './palette_visual_styles';

const useStyles = createUseStyles(styles);

const PaletteVisualComponent = ({
    palette,
    classes: receivedClasses = {},
    translations = PALETTE_KEY_TRANSLATIONS
}) => {
    const classes = useStyles();

    const paletteEntries = useMemo(() => Object.entries(palette ?? {}), [palette]);

    if (!palette) {
        return null;
    }

    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            {paletteEntries.map(([key, { 500: hex }]) => (
                <Tooltip
                    key={`palette_visual_color_${key}_${hex}`}
                    title={translations[key]}
                    customClasses={{
                        popper: receivedClasses.tooltipPopper
                    }}
                >
                    <div className={cn(classes.color, receivedClasses.color)} style={{ color: hex }} />
                </Tooltip>
            ))}
        </div>
    );
};

export const PaletteVisual = PaletteVisualComponent;
