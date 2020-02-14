import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => ({
    button: {
        textAlign: 'initial'
    },
    cardTitle: {},
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
        content: {
            padding: [theme.miscellaneous.spacing, '!important']
        },
        cardTitle: {
            fontSize: 28
        }
    }
});
