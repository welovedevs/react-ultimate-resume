import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        components: {
            cards: { width }
        },
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ variant }) => {
            const { backgroundColor, color } = getColorsFromCardVariant(theme, variant);
            return {
                width,
                position: 'relative',
                margin: theme.miscellaneous.spacing * 2,
                borderRadius: theme.components.cards.borderRadius,
                backgroundColor: getHexFromPaletteColor(theme, backgroundColor),
                color: getHexFromPaletteColor(theme, color),
                overflow: 'hidden',
                '&::before': {
                    paddingTop: '100%',
                    display: 'block',
                    content: "''"
                }
            };
        },
        editButtonContainer: {
            zIndex: 2,
            position: 'absolute',
            top: spacing * 2,
            right: spacing * 2
        }
    };
};
