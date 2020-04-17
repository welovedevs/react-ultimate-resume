import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;

    const QUERY_EXTRA_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.xs);

    return {
        title: {
            [QUERY_EXTRA_SMALL]: {
                fontSize: 28
            }
        },
        content: {
            [QUERY_EXTRA_SMALL]: {
                paddingTop: `${spacing * 2}px !important`,
                paddingLeft: `${spacing * 3}px !important`,
                paddingRight: `${spacing * 3}px !important`,
                paddingBottom: `${spacing}px !important`
            }
        }
    };
};
