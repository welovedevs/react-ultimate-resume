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
            '& > g > path': {
                fill: 'currentColor'
            }
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.3
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            logo: {
                marginBottom: spacing * 2
            },
            typography: {
                maxWidth: 'unset',
                padding: 0,
                fontSize: 28
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
            typography: {
                fontSize: 24,
                lineHeight: 1.1
            }
        }
    };
};
