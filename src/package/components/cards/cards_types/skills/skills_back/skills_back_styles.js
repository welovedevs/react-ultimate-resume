import {
    getColorsFromCardVariant,
    getHexFromPaletteColor,
    withCustomVerticalScrollbar
} from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    container: ({ cardVariant }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'auto',
        ...withCustomVerticalScrollbar(getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, cardVariant).backBackgroundColor))
    }),
    otherSkillsContainer: {
        width: '100%',
        margin: `0px ${theme.miscellaneous.spacing * 5}px`,
        paddingBottom: theme.miscellaneous.spacing * 2
    }
});
