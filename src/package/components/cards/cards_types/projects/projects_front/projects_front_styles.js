import {
    createScreenWidthMediaQuery,
    flex,
    getColorsFromCardVariant,
    getHexFromPaletteColor
} from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        background: ({ hasImage }) => ({
            height: hasImage ? '50%' : '30%',
            minHeight: hasImage ? '50%' : '30%',
            width: '100%',
            backgroundColor: palette.dark[50],
            overflow: 'hidden',
            ...center
        }),
        backgroundImage: {
            height: '140%',
            width: '110%',
            objectFit: 'cover',
            transform: 'rotate(-10deg)'
        },
        content: () => ({
            height: `calc(50% - ${spacing * (7 + 1)}px)`,
            padding: [spacing * 3, spacing * 12, 0],
            display: 'flex',
            alignItems: 'center',
            flex: 1
        }),
        stubBackground: ({ variant }) => ({
            width: '100%',
            height: '100%',
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
        }),
        text: {
            color: 'inherit',
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1.4
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            content: {
                padding: [spacing * 3, spacing * 6, 0],
                height: `calc(60% - ${spacing * (7 + 1)}px)`
            },
            text: {
                fontSize: 24,
                lineHeight: 1.2
            },
            background: {
                height: '40%',
                minHeight: '40%'
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
            text: {
                fontSize: 20,
                lineHeight: 1.2
            }
        }
    };
};
