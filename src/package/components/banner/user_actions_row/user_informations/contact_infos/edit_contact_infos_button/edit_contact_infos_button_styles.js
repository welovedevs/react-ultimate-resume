import { getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    container: {
        color: [getHexFromPaletteColor(theme, 'light'), '!important']
    }
});
