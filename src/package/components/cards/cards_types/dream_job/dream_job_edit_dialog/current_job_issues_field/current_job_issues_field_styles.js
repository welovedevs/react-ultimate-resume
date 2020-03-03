export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        textField: {
            marginLeft: spacing
        },
        checkboxGroup: {
            marginLeft: -spacing
        },
        checkboxField: {
            margin: spacing
        },
        othersCheckbox: {
            display: 'flex'
        },
        otherTextField: {
            margin: [spacing * 2, 0, 0]
        }
    };
};
