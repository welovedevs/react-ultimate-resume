import { config } from 'react-spring';

export const PALETTES_LIST_TRANSITIONS_SPRING_PROPS = Object.freeze({
    from: {
        opacity: 0,
        transform: 'translate3d(-20px, 0, 0)'
    },
    enter: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    },
    leave: {
        opacity: 0,
        transform: 'translate3d(-20px, 0, 0)'
    },
    trail: 1000 / 10,
    config: config.wobbly,
    unique: true
});
