export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            flexDirection: 'column'
        },
        logo: {
            height: '45%',
            width: 'auto',
            marginBottom: spacing * 3
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.5,
            maxWidth: '70%'
        }
    });
};
