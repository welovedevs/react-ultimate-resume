import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    container: ({ variant }) => ({
        backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
    })
});
