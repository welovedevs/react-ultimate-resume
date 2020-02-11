export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        icon: ({
            height: 20,
            width: 'auto',
            marginRight: spacing * 1.5,
            '& > g': {
                stroke: 'currentColor'
            }
        }),
        typography: {
            fontWeight: 500
        }
    });
};
