export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            flexDirection: 'column'
        },
        mainTypography: {
            fontSize: 44,
            lineHeight: 1.3
        },
        locationTypography: {
            color: 'inherit',
            marginTop: spacing * 3,
            fontWeight: 500
        }
    });
};
