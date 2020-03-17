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
            height: '45%',
            minHeight: '45%',
            width: 'auto'
        },
        typography: {
            fontSize: 36,
            lineHeight: 1.3
        },
        noSkill: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: [spacing, spacing * 2, 0]
        },
        noSkillTypography: {
            color: 'inherit',
            fontWeight: 700,
            lineHeight: 1.3
        },
        addButton: {
            marginTop: spacing * 4,
            marginLeft: -spacing
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            logo: {
                height: '40%',
                minHeight: '40%',
                marginBottom: 0
            },
            typography: {
                maxWidth: 'unset',
                fontSize: 28
            }
        }
    };
};
