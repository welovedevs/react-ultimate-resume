import {
    createScreenWidthMediaQuery,
    getColorsFromCardVariant,
    getHexFromPaletteColor
} from '../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        screenSizes,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ variant, overrideColor }) => ({
            color: getHexFromPaletteColor(theme, overrideColor || getColorsFromCardVariant(theme, variant).color),
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1.1,
            margin: spacing * 3,
            [createScreenWidthMediaQuery('max-width', screenSizes.small)]: {
                margin: spacing * 2
            }
        })
    };
};
