export const styles = (theme) => ({
    container: {
        margin: [-15, 0]
    },
    experience: ({ width }) => ({
        width: width === 'full' ? '100%' : 'fit-content',
        margin: [theme.miscellaneous.spacing, 0],
        padding: [5, 8]
    }),
    smallItemContainer: {
        width: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: theme.miscellaneous.spacing,
        padding: 8
    },
    listItem: {
        width: 'auto',
        display: 'flex',
        borderRadius: 5,
        flex: 1,
        padding: theme.miscellaneous.spacing
    },
    listItemError: {
        backgroundColor: theme.palette.danger[50]
    },
    sortableHelper: {
        zIndex: 1301
    },
    arrowContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    smallTitle: {
        marginLeft: theme.miscellaneous.spacing * 2,
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        overflow: 'hidden',
        maxHeight: 20 * 2,
        lineHeight: '20px',
        animation: 'fade-in-translate-left 500ms',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical'
    },
    handleIcon: {
        fill: '#5f5f5f !important',
        marginRight: 10,
        '&:hover': {
            cursor: 'move'
        }
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 24 + 10 + theme.miscellaneous.spacing * 2 + (23 / 2 - 1 / 2)
    },
    line: {
        height: 350,
        width: 1,
        minWidth: 1,
        maxWidth: 1,
        marginRight: 30,
        backgroundColor: theme.palette.primary[100]
    },
    fieldRow: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: -theme.miscellaneous.spacing,
        margin: [theme.miscellaneous.spacing * 2, 0]
    },
    fieldRowJustifyEnd: {
        justifyContent: 'flex-end'
    },
    fieldContainer: {
        margin: [0, theme.miscellaneous.spacing]
    },
    fullWidthFieldContainer: {
        width: '100%'
    },
    tag: {
        paddingRight: theme.miscellaneous.spacing * 2
    },
    icon: {
        maxHeight: 18,
        maxWidth: 18,
        marginLeft: theme.miscellaneous.spacing * 2
    },
    deleteButton: {
        extends: 'button',
        '& svg': {
            fill: theme.palette.danger[500]
        }
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    addTag: {
        padding: theme.miscellaneous.spacing
    },
    addIcon: {
        extend: 'icon'
    },
    stillEmployed: {
        display: 'flex',
        alignItems: 'center'
    },
    withMarginStillEmployedFieldRow: {
        margin: [theme.miscellaneous.spacing * 3, 0, 0, 0]
    },
    yearMonthWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        '&> div': {
            width: '50%'
        }
    },
    topFieldsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        '&> div': {
            width: `calc(50% - ${theme.miscellaneous.spacing * 2}px)`,
            margin: theme.miscellaneous.spacing
        }
    },
    checkboxField: {
        display: 'flex',
        alignItems: 'center',
        '& > $typography': {
            marginLeft: theme.miscellaneous.spacing
        }
    },
    '@media screen and (max-width: 730px)': {
        content: {
            marginLeft: theme.miscellaneous.spacing
        }
    }
});
