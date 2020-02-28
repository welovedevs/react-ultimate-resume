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
            '& path': {
                fill: ['currentColor', '!important']
            }
        },
        typography: {
            overflow: 'hidden',
            minHeight: 'fit-content',
            fontSize: 36,
            lineHeight: 1.3,
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': 3,
            '-webkit-box-orient': 'vertical'
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            logo: {
                '& path': {
                    fill: ['currentColor', '!important']
                }
            },
            typography: {
                fontSize: 28,
                wordWrap: 'break-word',
                '-webkit-line-clamp': 2,
                lineHeight: 1.2
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
            typography: {
                fontSize: 24
            }
        }
    };
};
