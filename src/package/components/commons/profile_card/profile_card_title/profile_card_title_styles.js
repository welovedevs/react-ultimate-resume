import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ variant }) => ({
            padding: [spacing * 3, spacing * 4],
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor)
        }),
        typography: ({ variant, overrideColor }) => ({
            color: getHexFromPaletteColor(theme, overrideColor || getColorsFromCardVariant(theme, variant).color),
            fontSize: 48,
            lineHeight: '48px',
            fontWeight: 700
        })
    };
};
