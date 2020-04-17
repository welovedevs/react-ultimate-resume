import { flex } from '../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            height: 200,
            width: '100%',
            minWidth: '100%',
            maxWidth: 300,
            minHeight: 200,
            borderRadius: 5,
            overflow: 'hidden',
            border: [1, 'dashed', palette.dark[300]],
            padding: spacing * 3,
            flexDirection: 'column',
            ...center
        },
        typography: {
            textAlign: 'center'
        },
        icon: {
            height: 50,
            marginBottom: spacing * 4,
            '& > g': {
                strokeWidth: 1
            }
        }
    };
};
