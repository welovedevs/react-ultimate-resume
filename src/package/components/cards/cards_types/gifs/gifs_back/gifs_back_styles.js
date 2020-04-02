import {
    createScreenWidthMediaQuery,
    flex,
    getColorsFromCardVariant,
    getHexFromPaletteColor,
    withCustomVerticalScrollbar
} from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const {
        screenSizes,
        components: {
            cards: { height }
        },
        miscellaneous: { spacing }
    } = theme;
    return {
        image: {
            height,
            width: '100%',
            objectFit: 'cover'
        },
        slideName: {
            zIndex: 4,
            position: 'absolute',
            width: '100%',
            bottom: 80,
            left: 0,
            textAlign: 'center'
        },
        transitioningItemWithoutGif: {
            height: '100%',
            width: '100%',
            padding: [spacing * 12, spacing * 14],
            zIndex: 4,
            position: 'absolute',
            top: 0,
            left: 0,
            ...center
        },
        slideNameWithoutGif: {
            maxHeight: '100%',
            overflow: 'auto',
            paddingRight: spacing,
            lineHeight: 'initial',
            ...withCustomVerticalScrollbar('#fff')
        },
        slidesContainer: {
            height: '100%',
            '& .slick-slider': {
                height: '100%'
            },
            '& .slick-dots': {
                zIndex: 3,
                bottom: 35
            }
        },
        reverseArrow: {
            '& > svg': {
                transform: 'scale(-1)'
            }
        },
        nextArrow: {
            right: 35
        },
        prevArrow: {
            left: 35
        },
        arrow: ({ variant }) => ({
            zIndex: 3,
            top: 'calc(50% - 25px)',
            position: 'absolute',
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backgroundColor),
            height: 50,
            width: 50,
            cursor: 'pointer',
            borderRadius: '50%',
            ...center,
            '& > svg': {
                height: 20,
                width: 'auto',
                '& > path': {
                    stroke: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
                }
            }
        }),
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            slidesContainer: {
                '& .slick-dots': {
                    display: ['none', '!important']
                }
            },
            slideName: {
                bottom: 35
            }
        }
    };
};
