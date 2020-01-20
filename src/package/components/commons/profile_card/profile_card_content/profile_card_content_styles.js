import {
    getColorsFromCardVariant,
    getHexFromPaletteColor
} from '../../../../utils/styles/styles_utils';

const getContentBackgroundColor = (theme, cardVariant) => {
    const { backBackgroundColor, backgroundColor: frontBackgroundColor } = getColorsFromCardVariant(theme, cardVariant);
    if (frontBackgroundColor === backBackgroundColor) {
        return 'transparent';
    }
    return getHexFromPaletteColor(theme, backBackgroundColor);
};

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: ({ cardVariant }) => {
            const backHexColor = getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).backColor);
            return ({
                padding: [spacing * 4, spacing * 8],
                backgroundColor: getContentBackgroundColor(theme, cardVariant),
                color: backHexColor,
                flex: 1,
                overflow: 'auto'
            });
        }
    });
};
