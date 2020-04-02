import { createScreenWidthMediaQuery } from '../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { screenSizes } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    return {
        container: {
            color: 'inherit',
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1.4,
            overflow: 'hidden',
            overflowWrap: 'break-word',
            [QUERY_SMALL]: {
                fontSize: 24,
                lineHeight: 1.2
            }
        }
    };
};
