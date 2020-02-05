export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        currentCities: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%'
        },
        column: {
            flexDirection: 'column'
        },
        othersCheckbox: {
            display: 'flex',
            alignItems: 'center'
        }
    });
};
