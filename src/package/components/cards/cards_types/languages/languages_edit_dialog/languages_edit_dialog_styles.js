import {
    createScreenWidthMediaQuery,
    getContrastDefaultColorFromPaletteColor,
    getHexFromPaletteColor
} from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        itemContainer: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            borderRadius: 5,
            margin: [spacing * 2, 0],
            padding: [0, spacing]
        },
        actions: {
            display: 'flex'
        },
        divider: {
            margin: [0, spacing * 2],
            height: 50,
            width: 1,
            backgroundColor: palette.dark[50]
        },
        listItem: {
            flex: 1,
            padding: 0,
            display: 'flex',
            alignItems: 'center'
        },
        sortableHelper: {
            zIndex: 1301
        },
        removeIcon: {
            fill: palette.danger[500]
        },
        fieldGroup: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        field: {
            display: 'flex',
            flexDirection: 'column',
            margin: theme.miscellaneous.spacing
        },
        sliderValueContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        sliderValue: {
            marginRight: spacing * 2,
            width: spacing * 10,
            marginBottom: 0
        },
        slider: {
            margin: theme.miscellaneous.spacing * 2
        },
        sliderPopperCard: {
            backgroundColor: getHexFromPaletteColor(theme, 'primary'),
            color: getHexFromPaletteColor(theme, getContrastDefaultColorFromPaletteColor(theme, 'primary'))
        },
        sliderPopperCardArrowContainer: {
            '& > svg': {
                '& path': {
                    fill: [getHexFromPaletteColor(theme, 'primary'), '!important']
                }
            }
        },
        listItemError: {},
        handleIcon: {
            fill: '#5f5f5f !important',
            marginRight: theme.miscellaneous.spacing * 2,
            '&:hover': {
                cursor: 'move'
            }
        },
        tag: {
            cursor: 'move'
        },
        icon: {
            maxHeight: 18,
            maxWidth: 18,
            marginLeft: theme.miscellaneous.spacing
        },
        dragHandle: {
            width: 32,
            height: 32
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
        bolden: {
            fontWeight: 500
        },
        selectIcon: {
            '& svg': {
                fill: 'none !important'
            }
        },
        [createScreenWidthMediaQuery('max-width', 900)]: {
            listItem: {
                flexWrap: 'wrap'
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            itemContainer: {
                flexDirection: 'column',
                alignItems: 'unset'
            },
            field: {
                flex: 1
            },
            fieldGroup: {
                flexDirection: 'row'
            },
            sliderValueContainer: {
                alignItems: 'unset',
                flexDirection: 'column'
            }
        }
    };
};
