import { createScreenWidthMediaQuery } from '../../../../../../../utils/styles/styles_utils';

export const styles = theme => ({
    list: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap'
    },
    listItem: {
        listStyle: 'none',
        zIndex: 2120
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        list: {
            justifyContent: 'center'
        }
    }
});
