import { useCallback, useContext } from 'react';

import { ProfileCardContext } from '../profile_card';

import { SET_HAS_DIALOG_OPENED } from '../../../../store/profile_card/profile_card_actions_types';

export const useHasDialogOpened = () => {
    const { state, dispatch } = useContext(ProfileCardContext);
    const { hasDialogOpened } = state;

    const setHasDialogOpened = useCallback(
        newHasDialogOpened =>
            dispatch({
                type: SET_HAS_DIALOG_OPENED,
                hasDialogOpened: newHasDialogOpened
            }),
        []
    );

    return [hasDialogOpened, setHasDialogOpened];
};
