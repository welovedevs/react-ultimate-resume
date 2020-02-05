import { config } from 'react-spring';

export const LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS = ({
    from: ({
        opacity: 0,
        transform: 'scale3d(0.75, 0.75, 0.75)'
    }),
    enter: ({
        opacity: 1,
        transform: 'scale3d(1, 1, 1)'
    }),
    leave: ({
        opacity: 0,
        transform: 'scale3d(0.75, 0.75, 0.75)'
    }),
    config: config.stiff,
});
