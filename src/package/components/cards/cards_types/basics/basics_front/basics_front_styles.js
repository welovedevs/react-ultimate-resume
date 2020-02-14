import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        components: {
            cards: { width }
        },
        screenSizes,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            flexDirection: 'column'
        },
        location: {
            width: '100%',
            fontWeight: 500,
            fontSize: 32,
            paddingTop: spacing * 2
        },
        mainTypography: {},
        [createScreenWidthMediaQuery('max-width', width + spacing * 2 * 2)]: {
            mainTypography: {
            },
            location: {
                fontSize: 24
            }
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            mainTypography: {
                fontSize: 28,
                paddingBottom: 0
            },
            location: {
                fontSize: 20
            }
        }
    };
};
