import { secondary } from '@welovedevs/ui/styles';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        locationField: {
            marginBottom: spacing * 3
        },
        places: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        place: {
            transformOrigin: 'center left',
            color: secondary[500]

        },
        deleteIcon: {
            fill: '#fff',
            width: 24,
            height: 24,
            marginRight: spacing,
            cursor: 'pointer'
        },
        sortableHelper: {
            zIndex: 10000000000
        },
        dragHandleButton: {
            display: 'flex'
        },
        dragHandle: {
            marginRight: spacing,
            width: 18,
            height: 18,
            '& g': {
                stroke: 'white'
            }
        }
    };
};
