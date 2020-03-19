import { getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        miscellaneous: { spacing },
        palette
    } = theme;
    return {
        container: {
            padding: [0, spacing * 10],
            position: 'relative'
        },
        smallLayoutContainer: {
            '&, & > $icons': {
                padding: 0
            }
        },
        backgroundLine: {
            height: 1,
            width: '100%',
            backgroundColor: palette.light[900],
            position: 'absolute',
            top: 'calc(50% - 1px / 2)',
            left: 0,
            opacity: 0.4
        },
        icons: {
            padding: [0, spacing * 2],
            zIndex: 2,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            backgroundColor: getHexFromPaletteColor(theme, 'primary')
        },
        icon: {
            height: 26,
            width: 'unset',
            margin: [0, spacing * 2],
            fill: palette.light[900]
        },
        link: {
            display: 'flex'
        },
        button: {
            display: 'flex'
        }
    };
};
