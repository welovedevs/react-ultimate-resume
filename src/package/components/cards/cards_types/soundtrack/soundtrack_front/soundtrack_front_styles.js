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
            lineHeight: 1.3
        },
        noSoundTrack: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: [spacing, spacing * 2, 0]
        },
        noSoundTrackTypography: {
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
                maxWidth: 'unset',
                fontSize: 28
            }
        }
    };
};
