import {
    createScreenWidthMediaQuery,
    getColorsFromCardVariant,
    getHexFromPaletteColor,
    withCustomVerticalScrollbar
} from '../../../../utils/styles/styles_utils';

const getContentBackgroundColor = (theme, cardVariant) => {
    const { backBackgroundColor, backgroundColor: frontBackgroundColor } = getColorsFromCardVariant(theme, cardVariant);
    if (frontBackgroundColor === backBackgroundColor) {
        return 'transparent';
    }
    return getHexFromPaletteColor(theme, backBackgroundColor);
};

export const styles = theme => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;
    return {
        container: ({ variant }) => {
            const backHexColor = getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backColor);
            return {
                padding: [spacing * 4, spacing * 8],
                backgroundColor: getContentBackgroundColor(theme, variant),
                color: backHexColor,
                flex: 1,
                overflow: 'auto',
                ...withCustomVerticalScrollbar(
                    getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backColor)
                )
            };
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.small)]: {
            container: {
                padding: [[spacing * 4, spacing * 5], '!important']
            }
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            container: {
                padding: [[spacing * 4, spacing * 3], '!important']
            }
        }
    };
};
