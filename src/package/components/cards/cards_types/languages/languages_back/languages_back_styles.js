import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => ({
    content: {
        padding: 0,
        position: 'relative',
        flex: 1,
        overflow: 'hidden'
    },
    contentAnimated: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    cardTitle: {},
    columnsContainer: {
        height: '100%',
        width: '70%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: [theme.miscellaneous.spacing * 5, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        columnsContainer: {
            width: '100%',
            padding: [theme.miscellaneous.spacing, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
        }
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
        content: {
            width: '100%',
            padding: [theme.miscellaneous.spacing, '!important']
        },
        cardTitle: {
            fontSize: 28
        }
    }
});
