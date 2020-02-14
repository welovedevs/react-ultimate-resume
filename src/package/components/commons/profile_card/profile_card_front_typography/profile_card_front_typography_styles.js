import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = theme => ({
    container: ({ variant, overrideColor }) => ({
        color: getHexFromPaletteColor(theme, overrideColor || getColorsFromCardVariant(theme, variant).color),
        fontWeight: 700,
        fontSize: 64,
        lineHeight: 1.1,
        padding: [theme.miscellaneous.spacing * 3]
    })
});
