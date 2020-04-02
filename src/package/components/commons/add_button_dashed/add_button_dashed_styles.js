export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        palette
    } = theme;
    return {
        container: {
            height: 125,
            width: 200,
            minHeight: 125,
            minWidth: 200,
            margin: spacing,
            borderRadius: 5,
            overflow: 'hidden',
            border: [1, 'dashed', palette.dark[300]]
        }
    };
};
