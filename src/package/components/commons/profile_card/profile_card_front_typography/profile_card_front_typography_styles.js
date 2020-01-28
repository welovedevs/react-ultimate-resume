import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = theme => ({
    container: ({ variant, overrideColor }) => ({
        color: getHexFromPaletteColor(theme, overrideColor || getColorsFromCardVariant(theme, variant).color),
        fontWeight: 700,
        fontSize: 70,
        lineHeight: 1.1
    })
});
