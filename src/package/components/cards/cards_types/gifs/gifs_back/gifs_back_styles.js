import { flex, getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        components: {
            cards: { height }
        }
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
        slidesContainer: {
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
        })
    };
};
