import { createScreenWidthMediaQuery, withCustomVerticalScrollbar } from '../../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', theme.screenSizes.small);

    return {
        container: {
            display: 'flex',
            height: '100%'
        },
        column: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        allTechnologies: {
            flex: 1.25,
            marginLeft: spacing * 2,
            [QUERY_SMALL]: {
                width: '100%'
            }
        },
        divider: {
            backgroundColor: palette.dark[100],
            margin: [0, spacing * 2, 0, spacing * 4]
        },
        technologiesList: {
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: spacing * 2,
            ...withCustomVerticalScrollbar()
        },
        selectedTechnologies: {
            flex: 1
        }
    };
};
