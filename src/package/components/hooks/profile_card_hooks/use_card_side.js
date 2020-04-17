import { useCallback, useContext } from 'react';

import { ProfileCardContext } from '../../commons/profile_card/profile_card';

import { SET_SIDE } from '../../../store/profile_card/profile_card_actions_types';

export const useCardSide = () => {
    const { state, dispatch } = useContext(ProfileCardContext);
    const { side, changingSides } = state;

    const setCardSide = useCallback(
        (newSide) => {
            if (changingSides) {
                return;
            }
            dispatch({
                type: SET_SIDE,
                side: newSide
            });
        },
        [changingSides]
    );

    return [side, setCardSide];
};
