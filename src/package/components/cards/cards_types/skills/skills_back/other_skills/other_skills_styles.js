import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    otherSkillsContainer: {
        width: '100%',
        padding: `${theme.miscellaneous.spacing * 3}px ${theme.miscellaneous.spacing * 5}px`
    },
    otherSkillsTitle: ({ variant }) => ({
        marginBottom: theme.miscellaneous.spacing * 2,
        color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
    })
});
