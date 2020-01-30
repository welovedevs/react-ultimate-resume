export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            flexDirection: 'column'
        },
        logo: {
            marginBottom: spacing * 4,
            '& > *': {
                fill: 'currentColor',
                stroke: 'currentColor'
            }
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.3,
            maxWidth: '70%'
        }
    };
};
