import { flex } from '../../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -spacing,
            ...center
        }
    };
};
