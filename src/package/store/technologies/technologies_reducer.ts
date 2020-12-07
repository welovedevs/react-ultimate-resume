import { TECHNOLOGIES_RECEIVED, TECHNOLOGIES_STARTED } from './technologies_actions_types';

interface Action {
    type: typeof TECHNOLOGIES_RECEIVED | typeof TECHNOLOGIES_STARTED;
    technologies: any;
}

export interface TechnologiesReducerType {
    technologies: unknown | undefined | null;
}
export const technologiesInitialState = Object.freeze({
    technologies: null
});

export const technologiesReducer = (state: TechnologiesReducerType, action: Action) => {
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
