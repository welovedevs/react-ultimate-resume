import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
        container: ({ variant }) => ({
            height: '45%',
            width: 'auto',
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
        })
    });
