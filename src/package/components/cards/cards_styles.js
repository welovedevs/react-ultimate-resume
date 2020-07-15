import { createScreenWidthMediaQuery } from '../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        components: {
            cards: { width: cardWidth }
        }
    } = theme;

    return {
        container: {
            width: '100%',
            marginTop: -(spacing * 12),
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 3
        },
        cards: ({ maxCardsPerRow }) => ({
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            ...(maxCardsPerRow && {
                maxWidth: (cardWidth + spacing * 2 * 2) * maxCardsPerRow
            })
        }),
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.medium)]: {
            cards: {
                maxWidth: '95% !important'
            }
        }
    };
};
