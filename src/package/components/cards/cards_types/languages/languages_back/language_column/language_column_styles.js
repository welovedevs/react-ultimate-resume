const MIN = 30;
const MAX = 100;

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;

    return {
        // Offset value = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
        container: ({ value, color, itemsSize }) => ({
            height: `${((value - 0) * (MAX - MIN)) / (MAX - 0) + MIN}%`,
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
