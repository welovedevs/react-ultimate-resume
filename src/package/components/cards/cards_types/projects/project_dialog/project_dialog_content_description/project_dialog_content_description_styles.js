export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ isEditing }) => ({
            marginBottom: spacing * 4,
            ...(!isEditing && {
                textAlign: 'center'
            })
        }),
        typography: {
            whiteSpace: 'pre-line',
            lineHeight: '24px'
        }
    };
};
