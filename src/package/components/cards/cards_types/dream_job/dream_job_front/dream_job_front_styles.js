import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = {
    container: {
        flexDirection: 'column'
    },
    logo: ({ theme }) => ({
        marginBottom: theme.miscellaneous.spacing * 4,
        '& path': {
            fill: ['currentColor', '!important']
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            '& path': {
                fill: ['currentColor', '!important']
            }
        }
    }),
    typography: ({ theme }) => ({
        overflow: 'hidden',
        minHeight: 'fit-content',
        fontSize: 36,
        lineHeight: 1.1,
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            fontSize: 28,
            wordWrap: 'break-word',
            '-webkit-line-clamp': 2,
            lineHeight: 1.2
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
            fontSize: 24
        }
    })
};
