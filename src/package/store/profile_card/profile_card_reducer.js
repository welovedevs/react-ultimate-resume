import {
    SET_CHANGING_SIDES,
    SET_HAS_DIALOG_OPENED,
    SET_IS_EDITING,
    SET_SIDE,
    SET_VARIANT
} from './profile_card_actions_types';
import { SIDES } from '../../components/commons/profile_card/profile_card_side/side';

const PROFILE_CARD_DEFAULT_STATE = Object.freeze({
    hasDialogOpened: false,
    side: SIDES.FRONT,
    variant: null,
    changingSides: false,
    isEditing: false
});

export const getProfileCardInitialState = (initialValues = {}) => ({
    ...{},
    ...PROFILE_CARD_DEFAULT_STATE,
    ...initialValues
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
        case SET_CHANGING_SIDES:
            return {
                ...state,
                changingSides: action.value
            };

        case SET_IS_EDITING:
            return {
                ...state,
                isEditing: action.value
            };

        default:
            return state;
    }
};
