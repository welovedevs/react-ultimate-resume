import { getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
        container: ({ color }) => ({
            height: '45%',
            width: 'auto',
            color: getHexFromPaletteColor(theme, color)
        })
    });
