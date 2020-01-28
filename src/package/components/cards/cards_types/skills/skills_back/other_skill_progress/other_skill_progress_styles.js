import { getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';

export const styles = theme => ({
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
    progressBarCustomContainer: {
        height: 8,
        backgroundColor: 'transparent'
    },
    progressBarCustomBar: ({ color }) => ({
        color: [getHexFromPaletteColor(theme, color), '!important']
    })
});
