export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: spacing * 12
        }
    };
};
