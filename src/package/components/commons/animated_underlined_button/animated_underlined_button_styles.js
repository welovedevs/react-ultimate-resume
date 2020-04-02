import { getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        },
        underlineContainer: {
            position: 'absolute',
            bottom: -(spacing * 1.5),
            left: 0,
            height: 2,
            width: '100%',
            overflow: 'hidden',
            pointerEvents: 'none'
        },
        underline: ({ color }) => ({
            height: '100%',
            width: '100%',
            backgroundColor: getHexFromPaletteColor(theme, color)
        })
    };
};
