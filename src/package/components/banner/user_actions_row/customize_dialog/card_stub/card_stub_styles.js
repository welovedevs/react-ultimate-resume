import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    return {
        wrapper: {
            margin: theme.miscellaneous.spacing,
            width: 150
        },
        card: ({ variant }) => {
            const { backgroundColor, color } = getColorsFromCardVariant(theme, variant);
            return {
                width: 150,
                height: 150,
                color: getHexFromPaletteColor(theme, color),
                '& .to-color': {
                    transition: 'fill 500ms',
                    fill: 'currentColor'
                },
                '& .to-fill': {
                    transition: 'fill 500ms',
                    fill: [getHexFromPaletteColor(theme, backgroundColor), '!important']
                }
            };
        },
        colorSquare: {
            width: theme.miscellaneous.spacing * 3,
            height: theme.miscellaneous.spacing * 3,
            borderRadius: theme.miscellaneous.spacing,
            margin: [0, theme.miscellaneous.spacing],
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.33)'
        }
    };
};
