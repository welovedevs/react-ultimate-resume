export const styles = (theme) => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        projectRow: {
            width: '100%',
            margin: [spacing, 0],
            padding: [spacing, spacing * 2],
            display: 'flex',
            alignItems: 'center'
        },
        divider: {
            margin: [0, spacing * 2],
            height: 50,
            width: 1,
            backgroundColor: palette.dark[50]
        },
        listItem: {
            width: 'auto',
            display: 'flex',
            flex: 1
        },
        sortableHelper: {
            zIndex: 1301
        },
        arrowContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        name: {
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            overflow: 'hidden',
            maxHeight: 20 * 2,
            lineHeight: '20px',
            animation: 'fade-in-translate-left 500ms'
        },
        dragHandleButton: {
            display: 'flex'
        },
        dragHandle: {
            width: 32,
            height: 32
        }
    };
};
