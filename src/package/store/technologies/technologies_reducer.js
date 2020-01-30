import { TECHNOLOGIES_RECEIVED } from './technologies_actions_types';

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

        default:
            return state;
    }
};
