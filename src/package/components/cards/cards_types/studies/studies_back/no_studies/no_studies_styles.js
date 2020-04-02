import { createScreenWidthMediaQuery, flex } from '../../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', theme.screenSizes.small);

    return {
        container: {
            height: '100%',
            flexDirection: 'column',
            padding: [spacing * 8, spacing],
            [QUERY_SMALL]: {
                padding: [spacing * 4, spacing]
            },
            ...center
        },
        button: {
            marginTop: spacing * 4
        }
    };
};
