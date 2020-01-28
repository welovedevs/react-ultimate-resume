import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = theme => ({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 0
    },
    typography: ({ variant, overrideColor }) => ({
        textTransform: 'unset',
        fontSize: ['14px', '!important'],
        color: [
            getHexFromPaletteColor(theme, overrideColor || getColorsFromCardVariant(theme, variant).color),
            '!important'
        ]
    }),
    arrowContainer: {
        display: 'flex'
    },
    arrow: ({ variant, overrideColor }) => ({
        height: 28,
        color: 'inherit',
        '& > path': {
            stroke: getHexFromPaletteColor(theme, overrideColor || getColorsFromCardVariant(theme, variant).color)
        }
    })
});
