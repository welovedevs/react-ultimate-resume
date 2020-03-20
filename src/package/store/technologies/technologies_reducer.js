import { TECHNOLOGIES_RECEIVED, TECHNOLOGIES_STARTED } from './technologies_actions_types';

export const technologiesInitialState = Object.freeze({
    technologies: null
});

export const technologiesReducer = (state, action) => {
    switch (action.type) {
        case TECHNOLOGIES_RECEIVED:
            return {
                ...state,
                technologies: action.technologies
            };
        case TECHNOLOGIES_STARTED:
            return {
                ...state,
                technologies: undefined
            };

        default:
            return state;
    }
};
