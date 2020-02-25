import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
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
        mainTypography: {
            extend: 'text',
            [QUERY_CARD_MARGIN_PADDING]: {
                fontSize: 42
            },
            [QUERY_EXTRA_SMALL]: {
                fontSize: 28,
                paddingBottom: 0
            }
        },
        location: {
            extend: 'text',
            width: '100%',
            fontWeight: 500,
            fontSize: 32,
            marginTop: spacing * 2,
            [QUERY_CARD_MARGIN_PADDING]: {
                fontSize: 24
            },
            [QUERY_EXTRA_SMALL]: {
                fontSize: 20
            }
        }
    };
};
