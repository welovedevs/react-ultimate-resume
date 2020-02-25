import { createScreenWidthMediaQuery, flex } from '../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const {
        palette,
        screenSizes,
        miscellaneous: { spacing }
    } = theme;

    const primaryRgb = palette.primary.rgbShades[500].join(', ');

    const QUERY_MEDIUM = createScreenWidthMediaQuery('max-width', screenSizes.medium);
    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    const QUERY_BETWEEN_SMALL_EXTRA_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small - (screenSizes.small - screenSizes.xs) / 2);
    const QUERY_EXTRA_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.xs);

    return {
        container: {
            height: 400,
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            padding: [spacing * 4, spacing * 12],
            ...center,
            '& > *:not($image):not($overlay)': {
                zIndex: 2
            },
            [QUERY_MEDIUM]: {
                padding: [spacing * 4, spacing * 6]
            },
            [QUERY_BETWEEN_SMALL_EXTRA_SMALL]: {
                height: 450
            },
            [QUERY_EXTRA_SMALL]: {
                padding: [spacing * 4, spacing * 2.5]
            }
        },
        absolutePositioned: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%'
        },
        image: {
            extend: 'absolutePositioned',
            height: '100%',
            width: '100%',
            zIndex: 0,
            objectFit: 'cover'
        },
        overlay: {
            extend: 'absolutePositioned',
            zIndex: 1,
            backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, .5) -28.58%, rgba(${primaryRgb}, 0.5) 93.05%)`
        },
        content: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: spacing * 12,
            [QUERY_SMALL]: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    };
};
