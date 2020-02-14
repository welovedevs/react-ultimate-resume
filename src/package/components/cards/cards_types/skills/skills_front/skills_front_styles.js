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
            '& > *': {
                fill: 'currentColor',
                stroke: 'currentColor'
            }
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.3,
            maxWidth: '70%'
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            logo: {
                marginBottom: 0
            },
            typography: {
                maxWidth: 'unset',
                fontSize: 28
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
            logo: {
                maxHeight: '33%',
                marginBottom: spacing
            },
            typography: {
                padding: 0
            }
        }
    };
};
