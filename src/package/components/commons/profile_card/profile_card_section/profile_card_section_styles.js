import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: ({ cardVariant }) => ({
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).backColor),
            margin: [spacing * 3, 0],
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        })
    });
};
