import { flex, getColorsFromCardVariant, getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    const {
        components: {
            cards: { height, width }
        }
    } = theme;
    return {
        container: ({ variant }) => {
            const { backgroundColor, color } = getColorsFromCardVariant(theme, variant);
            return {
                height,
                width,
                position: 'relative',
                margin: theme.miscellaneous.spacing * 2,
                borderRadius: theme.components.cards.borderRadius,
                backgroundColor: getHexFromPaletteColor(theme, backgroundColor),
                color: getHexFromPaletteColor(theme, color),
                overflow: 'hidden'
            };
        },
        editButton: ({
            zIndex: 2,
            position: 'absolute',
            top: spacing * 2,
            right: spacing * 2,
            height: 50,
            width: 50,
            borderRadius: '50%',
            backgroundColor: getHexFromPaletteColor(theme, 'light'),
            ...center
        }),
        editIcon: ({
            height: 24,
            fill: getHexFromPaletteColor(theme, 'dark')
        })
    };
};
