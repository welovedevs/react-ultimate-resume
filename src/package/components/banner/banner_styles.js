import { createScreenWidthMediaQuery, flex } from '../../utils/styles/styles_utils';

const { center } = flex;

export const styles = ({ palette, miscellaneous: { spacing }, screenSizes }) => {
    const primaryRgb = palette.primary.rgbShades[500].join(', ');
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
            marginBottom: spacing * 12
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.medium)]: {
            container: {
                padding: [spacing * 4, spacing * 6]
            }
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.small)]: {
            content: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.small - (screenSizes.small - screenSizes.xs) / 2)]: {
            container: {
                height: 450
            }
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            container: {
                padding: [spacing * 4, spacing * 2.5]
            }
        }
    };
};
