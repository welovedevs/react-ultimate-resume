import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        container: ({ variant }) => {
            const { backgroundColor, color } = getColorsFromCardVariant(theme, variant);
            return {
                position: 'relative',
                margin: theme.miscellaneous.spacing * 2,
                borderRadius: theme.components.cards.borderRadius,
                width: 470,
                height: 470,
                backgroundColor: getHexFromPaletteColor(theme, backgroundColor),
                color: getHexFromPaletteColor(theme, color),
                overflow: 'hidden'
            };
        },
        editButton: ({
            zIndex: 2,
            position: 'absolute',
            top: spacing * 2,
            right: spacing * 2
        }),
        editIcon: ({ variant }) => ({
            height: 40,
            fill: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
        })
    });
};
