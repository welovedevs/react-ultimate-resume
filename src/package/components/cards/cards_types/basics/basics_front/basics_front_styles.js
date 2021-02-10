import {
    createScreenWidthMediaQuery,
    getColorsFromCardVariant,
    getHexFromPaletteColor
} from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        components: {
            cards: { width }
        },
        screenSizes,
        miscellaneous: { spacing }
    } = theme;

    const QUERY_CARD_MARGIN_PADDING = createScreenWidthMediaQuery('max-width', width + spacing * 2 * 2);
    const QUERY_EXTRA_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.xs);

    return {
        container: {
            flexDirection: 'column'
        },
        text: {
            margin: [0, '!important']
        },
        addButton: {
            marginTop: spacing * 4,
            marginLeft: -spacing
        },
        texts: {
            width: '100%'
        },
        mainTypography: {
            extend: 'text',
            width: '100%',
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': 3,
            '-webkit-box-orient': 'vertical',
            maxHeight: 64 * 1.1 * 3,
            [QUERY_CARD_MARGIN_PADDING]: {
                fontSize: 42,
                maxHeight: 42 * 1.1 * 3
            },
            [QUERY_EXTRA_SMALL]: {
                fontSize: 28,
                maxHeight: 28 * 1.1 * 3,
                paddingBottom: 0
            }
        },
        truncatedMainTypography: {
            fontSize: 42,
            lineHeight: 1.3,
            [QUERY_CARD_MARGIN_PADDING]: {
                fontSize: 36,
                maxHeight: 36 * 1.3 * 3
            },
            [QUERY_EXTRA_SMALL]: {
                fontSize: 24,
                maxHeight: 24 * 1.3 * 3,
                paddingBottom: 0
            }
        },
        location: {
            extend: 'text',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 500,
            fontSize: 32,
            marginTop: spacing * 2,
            [QUERY_CARD_MARGIN_PADDING]: {
                fontSize: 24
            },
            [QUERY_EXTRA_SMALL]: {
                fontSize: 20
            }
        },
        locationIcon: ({ variant }) => ({
            height: 28,
            fill: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
            marginRight: spacing * 2
        })
    };
};
