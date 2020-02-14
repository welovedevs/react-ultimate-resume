import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            flexDirection: 'column'
        },
        logo: {
            marginBottom: spacing * 4,
            '& > path': {
                fill: 'currentColor'
            }
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.3,
            maxWidth: '70%'
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            logo: {
                marginBottom: spacing * 2
            },
            typography: {
                maxWidth: 'unset',
                fontSize: 28,
                lineHeight: 1.2
            }
        }
    };
};
