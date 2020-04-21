import { getHexFromPaletteColor } from '../../../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    container: {
        width: '100%',
        marginTop: 8 * 3,
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        margin: [8, 0]
    },
    icon: {
        height: 22,
        width: 22,
        fill: getHexFromPaletteColor(theme, 'dark')
    }
});
