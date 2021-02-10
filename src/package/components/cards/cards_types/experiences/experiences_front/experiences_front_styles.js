import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        screenSizes,
        miscellaneous: { spacing }
    } = theme;
    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    return {
        container: {
            flexDirection: 'column'
        },
        noWork: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: [spacing, spacing, 0]
        },
        textsContainer: {
            width: '100%'
        },
        noWorkTypography: {
            color: 'inherit',
            fontWeight: 700,
            lineHeight: 1.3
        },
        addButton: {
            marginTop: spacing * 4,
            marginLeft: -spacing
        },
        typography: {
            fontSize: 44,
            lineHeight: 1.1,
            wordWrap: 'break-word',
            overflow: 'hidden',
            display: '-webkit-box',
            paddingBottom: 2,
            '-webkit-line-clamp': 5,
            '-webkit-box-orient': 'vertical',
            maxHeight: 44 * 1.3 * 5,
            [QUERY_SMALL]: {
                maxWidth: '80%',
                fontSize: 24,
                '-webkit-line-clamp': 4,
                maxHeight: 24 * 1.3 * 4
            }
        }
    };
};
