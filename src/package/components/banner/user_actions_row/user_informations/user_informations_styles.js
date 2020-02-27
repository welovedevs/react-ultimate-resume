import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = theme => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;
    return {
        container: {
            display: 'flex',
            alignItems: 'center'
        },
        textColumn: {
            marginLeft: spacing * 3,
            '& > *': {
                margin: [spacing * 0.5, 0]
            }
        },
        text: {
            color: '#fff'
        },
        name: {
            extend: 'text',
            fontWeight: 700
        },
        description: {
            extend: 'text',
            fontWeight: 400
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.small)]: {
            container: {
                justifyContent: 'center'
            }
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.small - (screenSizes.small - screenSizes.xs) / 2)]: {
            container: {
                flexDirection: 'column',
                alignItems: 'center'
            },
            textColumn: {
                margin: [spacing * 2, 0, 0]
            }
        }
    };
};
