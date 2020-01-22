export const styles = theme => ({
    container: ({ variant }) => {
        const { backgroundColor, color } = theme.components.cards.variants[variant] || theme.components.cards.default;
        const { palette } = theme;
        return {
            position: 'relative',
            margin: theme.miscellaneous.spacing * 2,
            borderRadius: theme.components.cards.borderRadius,
            width: 470,
            height: 470,
            backgroundColor: palette[backgroundColor][500],
            color: palette[color][500],
            overflow: 'hidden'
        };
    },
    editButton: {
        zIndex: 10,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        borderBottomLeftRadius: theme.components.cards.borderRadius,
        padding: theme.miscellaneous.spacing * 2
    }
});
