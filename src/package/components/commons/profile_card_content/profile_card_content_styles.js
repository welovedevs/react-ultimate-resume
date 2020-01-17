import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

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
        container: ({ cardVariant }) => ({
            padding: [spacing * 4, spacing * 8],
            backgroundColor: getContentBackgroundColor(theme, cardVariant),
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).backgroundColor),
            flex: 1,
            overflow: 'auto'
        })
    });
};
