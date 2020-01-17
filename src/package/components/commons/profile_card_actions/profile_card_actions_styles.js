export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            position: 'absolute',
            bottom: spacing,
            right: spacing * 4,
            display: 'flex',
            alignItems: 'center'
        }
    };
};
