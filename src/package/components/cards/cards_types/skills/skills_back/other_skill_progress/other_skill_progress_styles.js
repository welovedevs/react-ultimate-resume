import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.miscellaneous.spacing
    },
    skillLabel: {
        width: 200,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingRight: 15
    },
    progressBarCustomContainer: ({ cardVariant }) => ({
        height: 8,
        // border: `2px solid ${getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).color)}`,
        backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).backgroundColor)
    }),
    progressBarCustomBar: ({ cardVariant }) => ({
        color: [getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).color), '!important']
    })
});
