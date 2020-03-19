import { config } from 'react-spring';

export const ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS = {
    from: {
        opacity: 0,
        transform: 'translate3d(0, 20px, 0)'
    },
    enter: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    },
    leave: {
        opacity: 0,
        transform: 'translate3d(0, 20px, 0)'
    },
    config: config.wobbly,
    unique: true
};

export const SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS = {
    from: {
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)'
    },
    enter: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    },
    leave: {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)'
    }
};
