import { useCallback, useContext, useMemo } from 'react';

import { ProfileCardContext } from '../../commons/profile_card/profile_card';

import { SET_VARIANT } from '../../../store/profile_card/profile_card_actions_types';

export const useCardVariant = () => {
    const { state, dispatch } = useContext(ProfileCardContext);
    const variant = useMemo(() => state.variant, [state.variant.toString()]);

    const setCardVariant = useCallback(
        (newVariant) =>
            dispatch({
                type: SET_VARIANT,
                variant: newVariant
            }),
        []
    );

    return [variant, setCardVariant];
};
