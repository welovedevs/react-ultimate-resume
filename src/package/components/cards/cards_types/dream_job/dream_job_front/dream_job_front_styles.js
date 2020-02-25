import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            flexDirection: 'column'
        },
        logo: {
            marginBottom: spacing * 4,
            '& > g > path': {
                fill: 'currentColor'
            }
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.3
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            logo: {
                '& > g > path': {
                    fill: 'currentColor'
                }
            },
            typography: {
                maxWidth: 'unset',
                fontSize: 28,
                textOverflow: 'ellipsis',
                wordWrap: 'break-word',
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-line-clamp': 2,
                '-webkit-box-orient': 'vertical',
                maxHeight: 28 * 1.3 * 2 + (spacing * 2 * 2)
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
            typography: {
                fontSize: 24
            }
        }
    };
};
