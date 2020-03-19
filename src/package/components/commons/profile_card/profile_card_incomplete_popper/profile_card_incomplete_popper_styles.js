import { getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            minWidth: 200,
            margin: [0, 0, -10, spacing * 3],
            backgroundColor: getHexFromPaletteColor(theme, 'danger'),
            display: 'flex',
            alignItems: 'center'
        },
        arrowContainer: {
            left: [spacing * 5, '!important'],
            '& > svg': {
                '& path': {
                    fill: [getHexFromPaletteColor(theme, 'danger'), '!important']
                }
            }
        },
        icon: {
            height: 22,
            fill: palette.light[900],
            marginRight: spacing * 2
        }
    };
};
