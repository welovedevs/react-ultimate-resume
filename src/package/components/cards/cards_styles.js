export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            width: '100%',
            marginTop: -(spacing * 12),
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 3,
            flexWrap: 'wrap'
        }
    };
};
