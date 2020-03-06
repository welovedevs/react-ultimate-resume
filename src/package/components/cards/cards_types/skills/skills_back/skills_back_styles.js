import {
    getColorsFromCardVariant,
    getHexFromPaletteColor,
    withCustomVerticalScrollbar
} from '../../../../../utils/styles/styles_utils';

export const styles = theme => ({
    container: ({ variant }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'auto',
        height: '100%',
        ...withCustomVerticalScrollbar(
            getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backBackgroundColor)
        )
    }),
    otherSkillsContainer: {
        width: '100%',
        margin: `0px ${theme.miscellaneous.spacing * 5}px`,
        paddingBottom: theme.miscellaneous.spacing * 2
    }
});
