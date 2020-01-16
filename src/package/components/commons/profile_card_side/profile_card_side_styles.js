export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: {
            padding: spacing * 7,
            willChange: 'transform',
            height: '100%',
            width: '100%',
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
        }
    });
};
