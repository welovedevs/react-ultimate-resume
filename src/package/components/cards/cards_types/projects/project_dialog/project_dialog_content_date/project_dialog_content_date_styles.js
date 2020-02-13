export const styles = theme => {
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
            fontSize: 32
        },
        datePicker: {
            cursor: 'pointer',

            marginLeft: spacing
        },
        [`@media screen and (max-width: ${theme.screenSizes.small}px)`]: {
            datePicker: {
                marginLeft: 'unset'
            }
        }
    };
};
