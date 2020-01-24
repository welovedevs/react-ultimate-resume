import { useCallback, useContext } from 'react';

import { ProfileCardContext } from '../profile_card';

import { SET_SIDE } from '../profile_card_actions_types';

export const useCardSide = () => {
    const { state, dispatch } = useContext(ProfileCardContext);
    const { side } = state;

    const setCardSide = useCallback((newSide) => dispatch({
        type: SET_SIDE,
        side: newSide
    }), [dispatch]);

    return [side, setCardSide];
};
