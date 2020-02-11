export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            zIndex: 2,
            position: 'absolute',
            top: spacing * 2,
            right: spacing * 2
        }
    });
};
