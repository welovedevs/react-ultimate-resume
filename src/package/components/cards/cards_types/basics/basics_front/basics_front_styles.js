export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            padding: spacing * 7
        },
        title: {
            color: 'inherit',
            fontWeight: 600,
            fontSize: 70,
            lineHeight: 1.1
        }
    };
};
