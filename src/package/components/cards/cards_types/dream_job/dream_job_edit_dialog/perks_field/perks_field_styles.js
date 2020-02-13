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
        }
    };
};
