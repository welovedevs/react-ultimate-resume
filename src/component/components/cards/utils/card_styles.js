export default theme => ({
    card: ({ variant }) => {
        const cardStyles = theme.cards[variant] || theme.defaultCard;
        return {
            padding: theme.spacing,
            margin: theme.spacing * 2,
            borderRadius: theme.rounding,
            width: 300,
            backgroundColor: cardStyles.backgroundColor,
            color: cardStyles.color,
            boxShadow: '8px 8px 22px rgba(0,0,0,0.2)'
        };
    }
});
