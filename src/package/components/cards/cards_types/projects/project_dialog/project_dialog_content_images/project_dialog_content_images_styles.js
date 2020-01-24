import { flex } from '../../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const { miscellaneous: { spacing }, palette } = theme;
    return ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: -(spacing),
            ...center
        },
        addImage: {
            height: 125,
            width: 200,
            minHeight: 125,
            minWidth: 200,
            margin: spacing,
            borderRadius: 5,
            overflow: 'hidden',
            border: [1, 'dashed', palette.dark[300]]
        }
    });
};
