export const styles = theme => ({
    title: {
        padding: theme.miscellaneous.spacing
    },
    cardsContainer: {
        width: (150 + 2 * theme.miscellaneous.spacing) * 3,
        display: 'flex',
        flexWrap: 'wrap'
    },

    sortableHelper: {
        zIndex: 1400,
        width: 150,
        height: 150
    }
});
