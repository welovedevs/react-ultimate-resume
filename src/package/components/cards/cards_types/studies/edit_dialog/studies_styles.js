import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', theme.screenSizes.small);

    return {
        paper: {
            maxWidth: [900, '!important']
        },
        itemContainer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            margin: [spacing * 2, 0],
            [QUERY_SMALL]: {
                flexDirection: 'column',
                alignItems: 'unset'
            }
        },
        header: {
            display: 'flex',
            alignItems: 'unset'
        },
        divider: {
            margin: [0, spacing * 2],
            height: 50,
            width: 1,
            backgroundColor: palette.dark[50]
        },
        dragHandleButton: {
            display: 'flex'
        },
        dragHandle: {
            width: 32,
            height: 32
        },
        listItem: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%'
        },
        fieldGroup: {
            display: 'flex',
            width: '100%',
            [QUERY_SMALL]: {
                flexDirection: 'column'
            }
        },
        field: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            margin: spacing
        },
        button: {
            padding: spacing * 2,
            margin: spacing * 2
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
        removeButton: {
            display: 'flex'
        },
        removeIcon: {
            fill: palette.danger[500]
        }
    };
};
