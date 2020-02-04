export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            margin: [spacing * 4, 0]
        },
        subtitle: {
            margin: [spacing, 0, spacing * 2]
        },
        componentErrorContainer: {
            marginTop: spacing * 2
        }
    });
};
