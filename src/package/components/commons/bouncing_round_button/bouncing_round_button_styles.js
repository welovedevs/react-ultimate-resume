import { flex, getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => ({
    container: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        backgroundColor: getHexFromPaletteColor(theme, 'light'),
        ...center
    },
    icon: {
        height: '40%',
        fill: getHexFromPaletteColor(theme, 'dark')
    }
});
