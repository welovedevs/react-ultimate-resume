export const styles = theme => ({
    palette: {
        display: 'flex'
    },
    colorSquare: {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
        width: theme.miscellaneous.spacing * 3,
        height: theme.miscellaneous.spacing * 3,
        borderRadius: theme.miscellaneous.spacing,
        margin: [0, theme.miscellaneous.spacing]
    },
    picker: {
        display: 'flex',
        alignItems: 'center'
    },
    currentPalette: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        padding: theme.miscellaneous.spacing
    }
});
