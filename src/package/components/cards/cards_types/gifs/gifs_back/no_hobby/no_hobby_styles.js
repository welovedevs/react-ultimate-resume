import { flex } from '../../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            height: '100%',
            flexDirection: 'column',
            padding: [spacing, spacing * 8],
            ...center
        },
        button: {
            zIndex: 10,
            marginTop: spacing * 4
        },
        noGifDescription: {
            zIndex: 10
        }
    };
};
