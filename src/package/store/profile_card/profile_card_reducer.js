import { SET_HAS_DIALOG_OPENED, SET_SIDE, SET_VARIANT } from './profile_card_actions_types';

export const getProfileCardInitialState = (initialValues = {}) =>
    Object.freeze({
        hasDialogOpened: initialValues.hasDialogOpened ?? false,
        side: initialValues.side ?? 'front',
        variant: initialValues.variant ?? null
    });

export const profileCardReducer = (state, action) => {
    switch (action.type) {
        case SET_HAS_DIALOG_OPENED:
            return {
                ...state,
                hasDialogOpened: action.hasDialogOpened
            };

        case SET_SIDE:
            return {
                ...state,
                side: action.side
            };

        case SET_VARIANT:
            return {
                ...state,
                variant: action.variant
            };

        default:
            return state;
    }
};
