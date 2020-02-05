export const styles = (theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    [theme.screenSizes.small]: {
        container: {
            flexDirection: 'column',
            justifyContent: 'unset'
        }
    }
});
