import { flex } from '../../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            height: '100%',
            flexDirection: 'column',
            padding: [0, spacing * 6],
            ...center
        },
        button: {
            marginTop: spacing * 4
        }
    };
};
