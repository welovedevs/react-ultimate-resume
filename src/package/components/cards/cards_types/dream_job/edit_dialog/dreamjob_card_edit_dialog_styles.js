export const styles = theme => ({
    currentCities: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    },
    deleteIcon: {
        fill: theme.palette.danger[500],
        width: 24,
        height: 24,
        marginRight: theme.miscellaneous.spacing,
        cursor: 'pointer'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    othersCheckbox: {
        display: 'flex',
        alignItems: 'center'
    }
});
