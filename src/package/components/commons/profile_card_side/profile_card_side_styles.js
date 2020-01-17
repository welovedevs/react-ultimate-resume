export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            willChange: 'transform',
            height: '100%',
            width: '100%',
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: theme.components.cards.borderRadius,
            overflow: 'hidden'
        }
    };
};
