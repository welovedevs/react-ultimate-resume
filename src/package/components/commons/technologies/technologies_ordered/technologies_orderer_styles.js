export const styles = theme => ({
    logoWrapper: {
        width: 40,
        height: 40,
        padding: 0,
        margin: [0, theme.miscellaneous.spacing]
    },
    logo: {
        width: '100%',
        height: '100%',
        padding: theme.miscellaneous.spacing
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 0
    },
    textWrapper: {
        flex: 1
    },
    button: {
        padding: theme.miscellaneous.spacing
    },
    trash: {
        fill: theme.palette.danger[500],
        width: 24,
        height: 24
    },
    sortableHelper: {
        zIndex: 1301
    }
});
