export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ value, color, itemsSize }) => ({
            height: `${value}%`,
            width: Math.min(90, (theme.components.cards.width * 0.7) / itemsSize),
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
    };
};
