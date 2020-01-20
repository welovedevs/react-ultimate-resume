export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ variant }) => {
            const { backgroundColor, color } =
                theme.components.cards.variants[variant] || theme.components.cards.default;
            const { palette } = theme;
            return {
                position: 'relative',
                margin: spacing * 2,
                borderRadius: theme.components.cards.borderRadius,
                width: 470,
                height: 470,
                backgroundColor: palette[backgroundColor][500],
                color: palette[color][500],
                overflow: 'hidden'
            };
        }
    };
};
