import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            flexDirection: 'column'
        },
        logo: {
            marginBottom: spacing * 4
        },
        typography: {
            overflow: 'hidden',
            minHeight: 'fit-content',
            fontSize: 36,
            lineHeight: 1.3,
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': 3,
            '-webkit-box-orient': 'vertical'
        },
        noEducation: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: [spacing, spacing * 2, 0]
        },
        noEducationTypography: {
            color: 'inherit',
            fontWeight: 700,
            lineHeight: 1.3
        },
        addButton: {
            marginTop: spacing * 4,
            marginLeft: -spacing
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            typography: {
                fontSize: 28,
                wordWrap: 'break-word',
                '-webkit-line-clamp': 2,
                lineHeight: 1.2
            }
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.xs)]: {
            typography: {
                fontSize: 24
            }
        }
    };
};
