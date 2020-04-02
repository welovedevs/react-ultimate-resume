import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { screenSizes } = theme;
    return {
        container: {},
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            container: {
                height: 40,
                width: 40
            }
        }
    };
};
