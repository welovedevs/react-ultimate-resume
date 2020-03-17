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
            position: 'relative',
            ...center
        }),
        backgroundImage: {
            height: '140%',
            width: '110%',
            objectFit: 'cover',
            transform: 'rotate(-10deg)'
        },
        content: () => ({
            padding: [spacing * 6, spacing * 12, 0],
            display: 'flex',
            flex: 1
        }),
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            backgroundImage: 'linear-gradient(360deg, rgba(0, 0, 0, .5) -28.58%, rgba(0, 0, 0, 0.2) 93.05%)'
        },
        stubBackground: ({ variant }) => ({
            width: '100%',
            height: '100%',
            backgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).color)
        }),
        text: {
            color: 'inherit',
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1.3,
            wordWrap: 'break-word',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': 3,
            '-webkit-box-orient': 'vertical',
            maxHeight: 30 * 1.3 * 3
        },
        noProject: {
            display: 'flex',
            flexDirection: 'column'
        },
        noProjectTypography: {
            color: 'inherit',
            fontWeight: 700,
            lineHeight: 1.3
        },
        addButton: {
            marginTop: spacing * 4,
            marginLeft: -spacing
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            content: () => ({
                padding: [spacing * 4, spacing * 6, 0],
                alignItems: 'flex-start'
            }),
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
