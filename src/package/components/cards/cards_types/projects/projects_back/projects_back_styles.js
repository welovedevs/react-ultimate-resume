import { flex, getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const { palette } = theme;
    return {
        title: {
            position: 'relative',
            '& > *:not($background)': {
                zIndex: 2,
                position: 'relative'
            }
        },
        typography: {
            color: [palette.light[500], '!important']
        },
        background: {
            zIndex: 0,
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            ...center,
            '&::after': {
                zIndex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: `rgba(${palette.dark.rgbShades[900].join(', ')}, .4)`,
                content: "''"
            }
        },
        stubBackground: ({ variant }) => ({
            width: '100%',
            height: '100%',
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
        }),
        backgroundImage: {
            height: '190%',
            width: '110%',
            objectFit: 'cover',
            transform: 'rotate(-10deg)'
        }
    };
};
