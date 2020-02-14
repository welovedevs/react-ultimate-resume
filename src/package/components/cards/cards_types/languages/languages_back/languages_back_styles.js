import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => ({
    content: {
        padding: 0,
        position: 'relative',
        flex: 1,
        overflow: 'hidden'
    },
    contentAnimated: {
        height: '100%'
    },
    cardTitle: {},
    columnsContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: [theme.miscellaneous.spacing * 5, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        columnsContainer: {
            padding: [theme.miscellaneous.spacing, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
        }
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
        content: {
            padding: [theme.miscellaneous.spacing, '!important']
        },
        cardTitle: {
            fontSize: 28
        }
    }
});
