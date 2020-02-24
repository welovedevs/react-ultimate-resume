import {
    createScreenWidthMediaQuery,
    getColorsFromCardVariant,
    getHexFromPaletteColor
} from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { screenSizes, miscellaneous: { spacing } } = theme;
    return ({
        container: ({ variant }) => ({
            height: '45%',
            minHeight: '45%',
            width: 'auto',
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
        }),
        [createScreenWidthMediaQuery('max-width', screenSizes.small)]: {
            container: () => ({
                height: '30%',
                minHeight: '30%',
                marginBottom: [spacing, '!important']
            })
        }
    });
};
