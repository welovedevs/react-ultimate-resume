import { getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        icon: ({ color }) => ({
            fill: getHexFromPaletteColor(theme, color),
            marginRight: spacing * 2
        })
    };
};
