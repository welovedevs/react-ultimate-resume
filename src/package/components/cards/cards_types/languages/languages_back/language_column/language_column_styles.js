export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: ({ value, color }) => ({
            height: `${value}%`,
            width: 90,
            backgroundColor: color,
            color: '#fff',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: [spacing * 3, spacing * 2]
        }),
        typography: {
            transform: 'rotate(-90deg)'
        }
    });
};
