import { flex } from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const { palette, miscellaneous: { spacing } } = theme;
    return ({
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
        divider: {
            height: 1,
            width: '100%',
            maxWidth: 300,
            margin: [0, 0, spacing * 5, 0],
            backgroundColor: palette.dark[50]
        },
        iframeContainer: {
            height: 375,
            width: 600,
            backgroundColor: palette.dark[50],
            borderRadius: 5,
            overflow: 'hidden',
            position: 'relative',
            ...center
        },
        iframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%'
        }
    });
};
