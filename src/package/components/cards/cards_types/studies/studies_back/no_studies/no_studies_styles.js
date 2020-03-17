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
            padding: [spacing * 8, spacing],
            ...center
        },
        button: {
            marginTop: spacing * 4
        }
    };
};
