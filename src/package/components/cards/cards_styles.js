export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            width: '100%',
            marginTop: -(spacing * 14),
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2
        }
    });
};
