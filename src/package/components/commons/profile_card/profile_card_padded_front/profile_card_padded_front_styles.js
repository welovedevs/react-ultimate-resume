import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;
    return {
        container: {
            height: '100%',
            padding: spacing * 7
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.small)]: {
            container: {
                padding: [spacing * 4, spacing * 4]
            }
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            container: {
                padding: [spacing * 3, spacing * 3]
            }
        }
    };
};
