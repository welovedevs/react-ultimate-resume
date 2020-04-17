import { createScreenWidthMediaQuery } from '../../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    text: {},
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
        text: {
            fontSize: 12
        }
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        text: {
            fontSize: 16
        }
    }
});
