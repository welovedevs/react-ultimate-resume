export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            marginLeft: -(spacing * 2)
        },
        popperCard: {
            zIndex: 1400
        }
    });
};
