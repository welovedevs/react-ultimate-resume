import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { palette } = theme;
    return {
        paper: {
            width: ['100%', '!important'],
            maxWidth: ['unset', '!important'],
            backgroundColor: [palette.light[800], '!important']
        },
        dialogRoot: {},
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            dialogRoot: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
        }
    };
};
