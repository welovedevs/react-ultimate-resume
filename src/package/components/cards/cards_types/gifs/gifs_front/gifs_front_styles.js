import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { screenSizes } = theme;
    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    return ({
        container: {
          display: 'flex',
          flexDirection: 'column'
        },
        image: {
            height: '100%',
            width: '100%',
            objectFit: 'cover'
        },
        paddedFront: {
            height: 1,
            flex: 1
        },
        withoutGifTypography: {
            fontSize: 44,
            lineHeight: 1.3,
            wordWrap: 'break-word',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': 3,
            '-webkit-box-orient': 'vertical',
            maxHeight: 44 * 1.3 * 3,
            position: 'relative',
            [QUERY_SMALL]: {
                maxWidth: '80%',
                fontSize: 24,
                '-webkit-line-clamp': 3,
                maxHeight: 24 * 1.3 * 3
            }
        }
    });
};
