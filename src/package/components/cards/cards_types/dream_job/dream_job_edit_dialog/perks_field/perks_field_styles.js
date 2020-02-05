export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        textField: {
            margin: [spacing * 2, 0, 0, spacing]
        },
        checkboxGroup: {
            marginLeft: -spacing
        },
        checkboxField: {
            margin: spacing
        }
    });
};
