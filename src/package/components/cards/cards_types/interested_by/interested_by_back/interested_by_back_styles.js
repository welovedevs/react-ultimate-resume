import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
        container: ({ variant }) => {
            const { color, backgroundColor } = getColorsFromCardVariant(theme, variant);
            return ({
                backgroundColor: getHexFromPaletteColor(theme, color),
                color: getHexFromPaletteColor(theme, backgroundColor)
            });
        }
    });
