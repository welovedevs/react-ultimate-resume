export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        root: {
            zIndex: [9999999999, '!important']
        },
        paper: {
            backgroundColor: [palette.dark[50], '!important']
        },
        content: {
            display: 'flex',
            padding: [[spacing * 2, spacing * 3, 0], '!important']
        },
        actions: {
            position: 'absolute',
            bottom: 0,
            right: 0
        },
        palettesList: ({ onlyShowPalettesList }) => ({
            ...(onlyShowPalettesList && {
                flex: 1
            })
        }),
        dividerContainer: {
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        },
        divider: {
            height: 0,
            width: 0,
            backgroundColor: palette.dark[100],
            margin: [0, spacing * 6]
        },
        cardsOrderer: {
            flex: 1
        }
    };
};
