export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            height: '100%',
            padding: spacing * 7,
            display: 'flex',
            alignItems: 'center'
        },
        title: {
            color: 'inherit',
            fontWeight: 600,
            fontSize: 70,
            lineHeight: 1.1
        }
    };
};
