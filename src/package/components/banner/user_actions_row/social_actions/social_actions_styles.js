import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        screenSizes,
        miscellaneous: { spacing }
    } = theme;
    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    return {
        container: {
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            marginLeft: spacing * 3,
            [QUERY_SMALL]: {
                width: '100%',
                marginTop: spacing * 2,
                flexWrap: 'unset',
                justifyContent: 'center',
                marginLeft: 'unset'
            }
        }
    };
};
