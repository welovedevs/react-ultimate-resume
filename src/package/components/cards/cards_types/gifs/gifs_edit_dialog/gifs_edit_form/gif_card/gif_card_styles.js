import { flex } from '../../../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            width: 300,
            margin: spacing * 2,
            padding: 0,
            position: 'relative',
            overflow: 'hidden'
        },
        imageContainer: {
            height: 200,
            width: '100%',
            backgroundColor: palette.dark[50],
            position: 'relative',
            ...center
        },
        image: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
        },
        gifUrl: {
            position: 'absolute',
            bottom: 5,
            left: 5,
            zIndex: 2,
            // backgroundColor: 'rgba(255,255,255,0.4)',
            padding: 4,
            fontWeight: 500,
            fontSize: 9
        },
        gifUrlTypoography: {
            fontWeight: 700,
            fontSize: 9
        },
        addGifButtonContainer: {
            padding: [spacing * 10, spacing * 2, 0],
            display: 'flex'
        },
        addGifButton: {
            width: '100%'
        },
        actions: {
            zIndex: 2,
            position: 'absolute',
            top: 0,
            right: spacing,
            '& > *': {
                margin: [spacing * 2, spacing]
            }
        },
        content: {
            padding: spacing * 2
        },
        textField: {}
    };
};
