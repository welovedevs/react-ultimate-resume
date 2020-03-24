import React, { useMemo } from 'react';

import chroma from 'chroma-js';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from './skills_back_recharts_styles';
import { useTechnologies } from '../../../../../hooks/technologies/use_technologies';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';
import { useCardVariant } from '../../../../../hooks/profile_card_hooks/use_card_variant';
import { DEFAULT_TECHNO_HANDLE } from '../../../../../../utils/icons';

const useStyles = createUseStyles(styles);

const CustomLabel = props => {
    const theme = useTheme();
    const classes = useStyles();
    const [variant] = useCardVariant();
    const { backgroundColor } = getColorsFromCardVariant(theme, variant);
    const { technologies } = useTechnologies();
    const { cx, cy, midAngle, customColor, outerRadius, name } = props;

    const techno = useMemo(() => {
        if (!technologies) {
            return null;
        }
        return technologies[name];
    }, [technologies, name]);

    const src = useMemo(() => {
        const hex = getHexFromPaletteColor(theme, backgroundColor);
        const luminance = chroma(hex).luminance();
        if (luminance < 0.98) {
            return `https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/${techno?.handle ||
                DEFAULT_TECHNO_HANDLE}`;
        }
        return `https://process.filestackapi.com/output=format:png/${techno?.handle || DEFAULT_TECHNO_HANDLE}`;
    }, [techno, theme, backgroundColor]);

    const { cos, startX, startY, inflexionX, inflexionY, endX, endY, textAnchor, logoXOffset } = useMemo(() => {
        const RADIAN = Math.PI / 180;
        const textOffset = name.length * 4.5;
        const sinLocal = Math.sin(-RADIAN * midAngle);
        const cosLocal = Math.cos(-RADIAN * midAngle);
        const startXLocal = cx + outerRadius * cosLocal;
        const startYLocal = cy + outerRadius * sinLocal;
        const inflexionXLocal = cx + (outerRadius + 20) * cosLocal;
        const inflexionYLocal = cy + (outerRadius + 20) * sinLocal;
        const endXLocal = inflexionXLocal + (cosLocal >= 0 ? 1 : -1) * 25;
        return {
            cos: cosLocal,
            startX: startXLocal,
            startY: startYLocal,
            inflexionX: inflexionXLocal,
            inflexionY: inflexionYLocal,
            endX: endXLocal,
            endY: inflexionYLocal,
            textAnchor: cosLocal >= 0 ? 'start' : 'end',
            logoXOffset: cosLocal >= 0 ? textOffset - 12.5 : -textOffset - 12.5
        };
    }, [midAngle, outerRadius, cx, cy]);

    return (
        <g>
            <g>
                <path
                    d={`M${startX},${startY}L${inflexionX},${inflexionY}L${endX},${endY}`}
                    stroke={customColor}
                    fill="none"
                />
                <g transform={`translate(${endX + (cos >= 0 ? 1 : -1) * 8},${endY - 10})`} width="100">
                    <image width="25" height="25" xlinkHref={src} y="-10" transform={`translate(${logoXOffset},-6)`} />
                    <text
                        textAnchor={textAnchor}
                        fill={customColor}
                        fontWeight="500"
                        className={classes.text}
                        transform="translate(0, 29)"
                    >
                        {name}
                    </text>
                </g>
            </g>
        </g>
    );
};

export { CustomLabel };
