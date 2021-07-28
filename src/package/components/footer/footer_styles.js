import { createScreenWidthMediaQuery, getHexFromPaletteColor } from '../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        palette,
        screenSizes
    } = theme;

    const QUERY_BETWEEN_SMALL_EXTRA_SMALL = createScreenWidthMediaQuery(
        'max-width',
        screenSizes.small - (screenSizes.small - screenSizes.xs) / 2
    );

    return {
        container: {
            width: '100%',
            backgroundColor: getHexFromPaletteColor(theme, 'primary'),
            color: palette.light[900],
            padding: [spacing * 3, spacing * 4],
            justifyContent: 'space-between',
            marginTop: spacing * 10
        },
        logoLink: {
            display: 'flex'
        },
        logo: {
            height: 26,
            width: 'unset',
            '& > g': {
                stroke: 'currentColor'
            }
        },
        githubLink: {
            display: 'flex'
        },
        githubLogo: {
            height: 30,
            width: 'unset',
            fill: palette.light[900]
        },
        wldLogoGithubLogoContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& > $githubLink': {
                marginLeft: spacing * 3
            },
            [QUERY_BETWEEN_SMALL_EXTRA_SMALL]: {
                width: '100%',
                marginBottom: spacing * 4
            }
        },
        logosContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            [QUERY_BETWEEN_SMALL_EXTRA_SMALL]: {
                flexDirection: 'column'
            }
        },
        linksContainer: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        },
        backlinksContainer: {
            padding: spacing * 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            textDecoration: 'underline',
            marginTop: spacing * 2,
            '& a': {
                margin: [0, spacing * 2]
            }
        },
        [QUERY_BETWEEN_SMALL_EXTRA_SMALL]: {
            backlinksContainer: {
                flexDirection: 'column',
                alignItems: 'center',
                '& a': {
                    marginBottom: spacing * 2
                }
            }
        }
    };
};
