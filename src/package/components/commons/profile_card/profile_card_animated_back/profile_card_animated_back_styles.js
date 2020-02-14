import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = theme => ({
    title: {},
    content: {},
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
        content: {
            paddingTop: `${theme.miscellaneous.spacing}px !important`,
            paddingLeft: `${theme.miscellaneous.spacing * 3}px !important`,
            paddingRight: `${theme.miscellaneous.spacing * 3}px !important`,
            paddingBottom: `${theme.miscellaneous.spacing}px !important`
        },
        title: {
            fontSize: 28
        }
    }
});
