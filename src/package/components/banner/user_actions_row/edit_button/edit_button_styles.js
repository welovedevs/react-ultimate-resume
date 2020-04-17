import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    icon: {
        marginRight: theme.miscellaneous.spacing,
        width: 14
    },
    penIcon: {
        extend: 'icon',
        fill: theme?.palette?.light?.[500] ?? '#fff'
    },
    checkIcon: {
        extend: 'icon',
        '& g': {
            stroke: theme?.palette?.light?.[500] ?? '#fff'
        }
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        penIcon: {
            marginRight: 'unset'
        },
        checkIcon: {
            marginRight: 'unset'
        }
    }
});
