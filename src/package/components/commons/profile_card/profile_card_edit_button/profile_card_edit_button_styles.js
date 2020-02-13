import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;
    return ({
        container: {
            zIndex: 2,
            position: 'absolute',
            top: spacing * 2,
            right: spacing * 2
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            container: {
                height: 40,
                width: 40
            }
        }
    });
};
