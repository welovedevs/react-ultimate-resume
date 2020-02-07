export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        addButtonDashed: {
            height: 365,
            width: 300,
            margin: spacing * 2
        },
        sortableHelper: {
            zIndex: 2120
        }
    });
};
