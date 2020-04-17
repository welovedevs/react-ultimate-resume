import {
    createScreenWidthMediaQuery,
    getColorsFromCardVariant,
    getHexFromPaletteColor
} from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { screenSizes } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);

    return {
        container: ({ variant }) => ({
            height: '45%',
            minHeight: '45%',
            width: 'auto',
            color: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color),
            '& .to-fill': {
                fill: 'currentColor'
            },
            '& .to-stroke': {
                stroke: 'currentColor'
            }
        }),
        [QUERY_SMALL]: {
            container: () => ({
                height: '30%',
                minHeight: '30%',
                marginBottom: [0, '!important']
            })
        }
    };
};
