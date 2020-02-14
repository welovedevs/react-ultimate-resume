import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => ({
    container: {},
    typography: {
        fontSize: 36,
        lineHeight: 1.3
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        typography: {
            maxWidth: 'unset',
            fontSize: 28
        }
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
        typography: {
            padding: 0
        }
    }
});
