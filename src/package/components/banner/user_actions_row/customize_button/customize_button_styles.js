import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = theme => ({
    icon: {
        marginRight: theme.miscellaneous.spacing
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        icon: {
            marginRight: 'unset'
        }
    }
});
