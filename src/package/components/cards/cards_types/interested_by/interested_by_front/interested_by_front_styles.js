import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;
    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    const QUERY_EXTRA_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.xs);
    return ({
        container: {},
        interestedByValue: {
            marginTop: spacing * 4
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.3,
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': 4,
            '-webkit-box-orient': 'vertical',
            maxHeight: 36 * 1.3 + spacing * 4 + 36 * 1.3 * 4,
            [QUERY_SMALL]: {
                maxWidth: 'unset',
                fontSize: 28
            },
            [QUERY_EXTRA_SMALL]: {
                typography: {
                    padding: 0
                }
            }
        }
    });
};
