import { createScreenWidthMediaQuery, flex } from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        divider: {
            height: 1,
            width: '100%',
            margin: [0, 0, spacing * 5, 0],
            backgroundColor: palette.dark[50]
        },
        iframeContainer: ({ fullScreen, isMobile }) => ({
            flex: 1,
            width: '100%',
            backgroundColor: palette.dark[50],
            borderRadius: 5,
            overflow: 'hidden',
            position: 'relative',
            ...center,
            ...(!fullScreen &&
                !isMobile && {
                    minHeight: 375
                })
        }),
        iframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%'
        },
        field: {},
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            divider: {
                margin: [0, 0, spacing * 2, 0]
            },
            field: {
                margin: [0, 0, spacing * 2, 0]
            }
        }
    };
};
