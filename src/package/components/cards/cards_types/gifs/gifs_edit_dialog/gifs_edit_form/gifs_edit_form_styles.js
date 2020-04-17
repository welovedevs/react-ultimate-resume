import { createScreenWidthMediaQuery } from '../../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        addButtonDashed: {
            height: 365,
            width: 300,
            margin: spacing * 2
        },
        sortableHelper: {
            zIndex: 2120
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            addButtonDashed: {
                height: 75,
                minHeight: 75
            }
        }
    };
};
