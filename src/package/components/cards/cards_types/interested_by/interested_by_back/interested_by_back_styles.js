import {
    getColorsFromCardVariant,
    getHexFromPaletteColor,
    withCustomVerticalScrollbar
} from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: ({ variant }) => ({
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
        }),
        typography: ({ variant }) => ({
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            textOverflow: 'unset',
            '-webkit-line-clamp': 'unset',
            '-webkit-box-orient': 'unset',
            margin: 0,
            paddingRight: spacing * 3,
            lineHeight: 'initial',
            maxHeight: '100%',
            ...withCustomVerticalScrollbar(
                getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor)
            )
        })
    };
};
