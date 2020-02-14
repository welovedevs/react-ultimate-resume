import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = theme => ({
    container: {
        color: 'inherit',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 1.4,
        overflow: 'hidden',
        overflowWrap: 'break-word'
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
        container: {
            fontSize: 24,
            lineHeight: 1.2
        }
    }
});
