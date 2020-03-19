import { withCustomVerticalScrollbar } from '../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            paddingRight: spacing * 6,
            height: '100%',
            overflowY: 'auto',
            ...withCustomVerticalScrollbar()
        },
        listItem: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: 0,
            margin: [spacing * 4, 0],
            position: 'relative',
            zIndex: 1400
        },
        logo: {
            width: 50,
            height: 50,
            padding: spacing * 1,
            margin: [0, spacing * 3, 0, spacing]
        },
        logoImage: {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        },
        dragHandleButton: {
            display: 'flex'
        },
        dragHandle: {
            width: 32,
            height: 32
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
        textWrapper: {
            flex: 1
        },
        trash: {
            fill: theme.palette.danger[500],
            width: 24,
            height: 24
        },
        sliderValueContainer: {
            display: 'flex',
            alignItems: 'center',
            marginTop: spacing
        },
        sliderValue: {
            marginRight: spacing * 2,
            width: spacing * 5,
            marginBottom: 0
        },
        slider: {
            zIndex: 1
        },
        popper: {
            zIndex: 130200
        },
        bolden: {
            fontWeight: 500
        },
        sortableHelper: {
            zIndex: [1301, '!important']
        }
    };
};
