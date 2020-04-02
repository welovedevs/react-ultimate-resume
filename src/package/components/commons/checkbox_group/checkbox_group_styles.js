export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -spacing
        },
        checkboxField: ({ rows = 2 }) => ({
            width: `calc(${100 / rows}% - ${rows * 2 * spacing}px)`,
            margin: spacing
        }),
        checkbox: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        }
    };
};
