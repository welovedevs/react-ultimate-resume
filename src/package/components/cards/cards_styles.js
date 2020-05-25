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
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            ...(maxCardsPerRow && {
                maxWidth: (cardWidth + spacing * 2 * 2) * maxCardsPerRow
            })
        })
    };
};
