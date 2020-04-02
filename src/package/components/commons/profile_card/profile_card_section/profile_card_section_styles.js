import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ variant }) => ({
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backColor),
            margin: [spacing * 3, 0],
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        })
    };
};
