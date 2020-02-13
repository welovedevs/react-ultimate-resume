export const styles = (theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    [`@media screen and (max-width: ${theme.screenSizes.small}px)`]: {
        container: {
            flexDirection: 'column',
            justifyContent: 'unset'
        }
    }
});
