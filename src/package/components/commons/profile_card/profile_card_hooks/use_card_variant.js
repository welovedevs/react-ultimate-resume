import { useCallback, useContext } from 'react';

import { ProfileCardContext } from '../profile_card';

import { SET_VARIANT } from '../profile_card_actions_types';

export const useCardVariant = () => {
    const { state, dispatch } = useContext(ProfileCardContext);
    const { variant } = state;

    const setCardVariant = useCallback((newVariant) => dispatch({
        type: SET_VARIANT,
        variant: newVariant
    }), []);

    return [variant, setCardVariant];
};
