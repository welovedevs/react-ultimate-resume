export const LOCATION_PLACES_LIST_TRANSITION_PROPS = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0
    }
};

export const LOCATION_PLACES_FIELD_TRANSITIONS_PROPS = {
    initial: {
        opacity: 0,
        scale: 0.75
    },
    animate: {
        opacity: 1,
        scale: 1
    },
    exit: {
        opacity: 0,
        scale: 0.75
    }
};
