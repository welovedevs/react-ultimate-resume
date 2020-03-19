import { config } from 'react-spring';

export const GIFS_BACK_TRANSITIONS_SPRING_PROPS = {
    from: {
        opacity: 0,
        transform: 'translate3d(25%, 0, 0)'
    },
    enter: {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
    },
    leave: {
        opacity: 0,
        transform: 'translate3d(-25%, 0, 0)'
    },
    unique: true,
    config: config.slow
};
