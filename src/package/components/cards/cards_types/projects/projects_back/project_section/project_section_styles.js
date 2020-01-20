export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        sectionText: {
            margin: [spacing * 3, 0]
        },
        detail: {
            display: 'flex',
            alignItems: 'center'
        },
        detailIcon: {
            height: 20,
            width: 'auto',
            marginRight: spacing * 2
        },
        detailTypography: {
            fontWeight: 500
        }
    });
};
