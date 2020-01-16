import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: ({ cardVariant }) => ({
            padding: [spacing * 3, spacing * 6],
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).color),
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).backgroundColor)
        })
    });
};
