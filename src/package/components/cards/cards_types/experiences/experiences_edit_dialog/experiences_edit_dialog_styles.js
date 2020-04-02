import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        experience: ({ width }) => ({
            width: width === 'full' ? '100%' : 'fit-content',
            margin: [spacing, 0],
            padding: [spacing, spacing * 2]
        }),
        smallItemContainer: {
            width: 'auto',
            display: 'flex',
            alignItems: 'center'
        },
        button: {
            marginLeft: spacing,
            padding: 8
        },
        divider: {
            margin: [0, spacing * 2],
            height: 50,
            width: 1,
            backgroundColor: palette.dark[50]
        },
        removeButton: {
            display: 'flex'
        },
        removeIcon: {
            fill: palette.danger[500]
        },
        listItem: {
            width: 'auto',
            display: 'flex',
            flex: 1
        },
        warningIcon: {
            marginLeft: spacing * 2
        },
        listItemError: {
            backgroundColor: [palette.danger[50], '!important']
        },
        sortableHelper: {
            zIndex: 1301
        },
        arrowContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        smallTitle: {
            marginLeft: spacing * 2,
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
        content: {
            display: 'flex',
            alignItems: 'center',
            margin: [spacing * 2, 0, 0, spacing * 2]
        },
        line: {
            height: 600,
            width: 1,
            minWidth: 1,
            maxWidth: 1,
            marginRight: 30,
            backgroundColor: palette.dark[50]
        },
        dragHandleButton: {
            display: 'flex'
        },
        dragHandle: {
            width: 32,
            height: 32
        },
        fieldRow: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -spacing,
            margin: [spacing * 2, 0]
        },
        fieldRowJustifyEnd: {
            justifyContent: 'flex-end'
        },
        fieldContainer: {
            margin: [0, spacing]
        },
        fullWidthFieldContainer: {
            width: '100%'
        },
        tag: {
            paddingRight: spacing * 2
        },
        icon: {
            maxHeight: 18,
            maxWidth: 18,
            marginLeft: spacing * 2
        },
        addButton: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        addTag: {
            padding: spacing
        },
        addIcon: {
            extend: 'icon'
        },
        stillEmployed: {
            display: 'flex',
            alignItems: 'center'
        },
        withMarginStillEmployedFieldRow: {
            margin: [spacing * 3, 0, 0, 0]
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
                width: `calc(50% - ${spacing * 2}px)`,
                margin: spacing
            }
        },
        checkboxField: {
            display: 'flex',
            alignItems: 'center',
            '& > $typography': {
                marginLeft: spacing
            }
        },
        [createScreenWidthMediaQuery('max-width', 730)]: {
            content: {
                marginLeft: spacing
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            experience: {
                padding: '0 !important'
            },
            divider: {
                margin: [0, spacing]
            },
            yearMonthWrapper: {
                flexDirection: 'column',
                margin: spacing,
                '&> div': {
                    width: '100%',
                    marginBottom: spacing
                }
            },
            withMarginStillEmployedFieldRow: {
                margin: [spacing * 2, 0, 0, 0]
            }
        }
    };
};
