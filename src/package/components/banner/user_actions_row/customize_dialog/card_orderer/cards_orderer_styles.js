import { withCustomVerticalScrollbar } from '../../../../../utils/styles/styles_utils';

const CARD_DIMENSION = 200;

export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            flex: 1,
            overflow: 'auto',
            ...withCustomVerticalScrollbar('transparent'),
            display: 'flex',
            justifyContent: 'center'
        },
        cardsContainer: {
            width: (CARD_DIMENSION + 2 * spacing) * 3,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        sortableHelper: {
            zIndex: 10000000000,
            width: CARD_DIMENSION,
            height: CARD_DIMENSION
        }
    };
};
