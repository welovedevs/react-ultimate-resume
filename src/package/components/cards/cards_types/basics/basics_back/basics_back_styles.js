import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
        section: ({ cardVariant }) => ({
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).backColor),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        })
    });
