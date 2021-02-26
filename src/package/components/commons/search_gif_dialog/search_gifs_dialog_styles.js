import { withCustomVerticalScrollbar } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        paper: {
            width: '90%',
            maxWidth: [760, '!important']
        },
        content: {
            ...withCustomVerticalScrollbar()
        },
        textField: {
            marginBottom: spacing * 4
        },
        results: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        imageContainer: {
            height: 200,
            width: 200,
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: palette.dark[50],
            margin: spacing * 2,
            position: 'relative'
        },
        image: {
            height: '100%',
            width: '100%',
            objectFit: 'cover'
        }
    };
};
