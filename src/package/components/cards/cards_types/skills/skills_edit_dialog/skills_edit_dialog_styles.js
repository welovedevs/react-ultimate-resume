import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        paper: {
            width: ['100%', '!important'],
            maxWidth: ['unset', '!important'],
            backgroundColor: [palette.light[800], '!important']
        },
        content: {
            padding: [[spacing, spacing * 3, 0], '!important']
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            actions: {
                position: 'unset'
            }
        }
    };
};
