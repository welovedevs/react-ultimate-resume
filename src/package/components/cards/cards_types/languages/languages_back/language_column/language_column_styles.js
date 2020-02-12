export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        // offsetted value = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
        container: ({ value, color, itemsSize }) => ({
            height: `${((value - 0) * (100 - 22)) / (100 - 0) + 22}%`,
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
