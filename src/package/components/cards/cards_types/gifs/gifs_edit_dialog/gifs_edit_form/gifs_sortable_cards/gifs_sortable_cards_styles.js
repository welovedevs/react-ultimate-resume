export const styles = theme => ({
    list: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap'
    },
    listItem: {
        listStyle: 'none',
        zIndex: 2120
    },
    [`@media screen and (max-width: ${theme.screenSizes.small}px)`]: {
        list: {
            justifyContent: 'center'
        }
    }
});
