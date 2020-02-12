export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        locationField: {
            marginBottom: spacing * 3
        },
        places: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        place: {
            transformOrigin: 'center left'
        },
        deleteIcon: {
            fill: '#fff',
            width: 24,
            height: 24,
            marginRight: spacing,
            cursor: 'pointer'
        }
    };
};
