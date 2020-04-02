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

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    const QUERY_EXTRA_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.xs);

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
        [QUERY_SMALL]: {
            container: () => ({
                padding: [[spacing * 4, spacing * 5], '!important']
            })
        },
        [QUERY_EXTRA_SMALL]: {
            container: () => ({
                padding: [[spacing * 4, spacing * 3], '!important']
            })
        }
    };
};
