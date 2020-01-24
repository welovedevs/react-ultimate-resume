import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            flexDirection: 'column'
        },
        mainTypography: {
            fontSize: 44,
            lineHeight: 1.3
        },
        locationTypography: ({ variant }) => ({
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
            marginTop: spacing * 3,
            fontWeight: 500
        })
    });
};
