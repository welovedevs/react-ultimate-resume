import {
    createScreenWidthMediaQuery,
    flex,
    getContrastDefaultColorFromPaletteColor,
    getHexFromPaletteColor
} from '../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', theme.screenSizes.small);

    return {
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
        textField: {
            minHeight: 'fit-content',
            minWidth: 400,
            marginBottom: spacing * 3,
            [QUERY_SMALL]: {
                minWidth: 'unset'
            }
        },
        technologiesList: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -(spacing * 2),
            [QUERY_SMALL]: {
                justifyContent: 'center',
                marginLeft: 'unset'
            }
        },
        technologyItem: {
            width: 80,
            maxWidth: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: [spacing, spacing * 2],
            padding: spacing
        },
        technologyImageContainer: {
            position: 'relative',
            width: '100%',
            minWidth: 80,
            height: 80,
            padding: spacing * 1.5,
            marginBottom: spacing * 2,
            overflow: 'hidden'
        },
        technologyImage: {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        },
        typography: {
            width: '100%',
            maxWidth: 80,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            textAlign: 'center',
            whiteSpace: 'nowrap'
        },
        selectedTechnologyLayer: {
            zIndex: 2,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: getHexFromPaletteColor(theme, 'primary'),
            color: getHexFromPaletteColor(theme, getContrastDefaultColorFromPaletteColor(theme, 'primary')),
            textAlign: 'center',
            borderRadius: 5,
            ...center
        }
    };
};
