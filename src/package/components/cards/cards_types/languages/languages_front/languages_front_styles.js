import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => ({
    typography: {
        maxWidth: '65%'
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        typography: {
            maxWidth: '80%',
            fontSize: 40
        }
    }
});
