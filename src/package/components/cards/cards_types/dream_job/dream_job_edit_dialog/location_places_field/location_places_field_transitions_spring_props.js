import { config } from 'react-spring';

export const LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS = {
    from: {
        opacity: 0,
        scale: 0.75
    },
    enter: {
        opacity: 1,
        scale: 1
    },
    leave: {
        opacity: 0,
        scale: 0.75
    },
    config: config.stiff
};
