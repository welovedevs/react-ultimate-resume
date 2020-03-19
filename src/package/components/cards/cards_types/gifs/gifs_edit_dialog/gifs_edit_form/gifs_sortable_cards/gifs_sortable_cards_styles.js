import { createScreenWidthMediaQuery } from '../../../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const { screenSizes } = theme;
    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    return {
        list: {
            margin: 0,
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            [QUERY_SMALL]: {
                justifyContent: 'center'
            }
        },
        listItem: {
            listStyle: 'none',
            zIndex: 2120
        }
    };
};
