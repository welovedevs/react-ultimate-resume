import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ cardVariant }) => ({
            padding: [spacing * 3, spacing * 4],
            ...Object.entries(getColorsFromCardVariant(theme, cardVariant) || {}).reduce(
                (acc, [key, value]) => ({
                    [key]: getHexFromPaletteColor(theme, value)
                }),
                {}
            )
        }),
        typography: {
            color: ['inherit', '!important'],
            fontSize: 48,
            lineHeight: '48px',
            fontWeight: 700
        }
    };
};
