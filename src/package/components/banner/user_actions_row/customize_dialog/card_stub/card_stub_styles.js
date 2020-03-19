import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

const CARD_DIMENSION = 200;

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            position: 'relative',
            cursor: 'move'
        },
        popper: {
            zIndex: 10000000001
        },
        cardVariantsTooltipPopper: {
            extend: 'popper'
        },
        cardVariantsList: {
            listStyle: 'none'
        },
        cardVariantsCheckbox: {
            marginRight: spacing * 4,
            borderRadius: '50%'
        },
        cardVariantsListItem: {
            display: 'flex',
            alignItems: 'center',
            padding: 0
        },
        cardVariantsColor: {
            height: 30,
            width: 30,
            margin: [0, spacing],
            borderRadius: '50%',
            border: [1, 'solid', palette.dark[100]]
        },
        card: ({ variant }) => {
            const { backgroundColor, color } = getColorsFromCardVariant(theme, variant);
            return {
                width: CARD_DIMENSION,
                height: CARD_DIMENSION,
                color: getHexFromPaletteColor(theme, color),
                margin: spacing,
                userSelect: 'none',
                '& .to-color': {
                    transition: 'fill 250ms',
                    fill: 'currentColor'
                },
                '& .to-fill': {
                    transition: 'fill 250ms',
                    fill: [getHexFromPaletteColor(theme, backgroundColor), '!important']
                }
            };
        }
    };
};
