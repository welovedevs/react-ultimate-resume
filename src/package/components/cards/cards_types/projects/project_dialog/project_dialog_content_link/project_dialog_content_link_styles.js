export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ isEditing }) => ({
            flex: 1,
            marginBottom: spacing * 4,
            ...(!isEditing && {
                textAlign: 'center'
            })
        }),
        typography: {
            fontSize: 32
        }
    };
};
