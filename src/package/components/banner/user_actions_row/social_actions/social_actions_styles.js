import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { screenSizes, miscellaneous: { spacing } } = theme;
    return ({
        container: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            marginLeft: spacing * 3
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.small)]: {
            container: {
                width: '100%',
                marginTop: spacing * 2,
                justifyContent: 'center',
                marginLeft: 'unset',
                '& > *': {
                    flex: 1
                }
            }
        }
    });
};
