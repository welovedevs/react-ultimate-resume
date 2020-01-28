import { config } from 'react-spring';

export const PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS = {
    from: {
        opacity: 0,
        transform: 'translate3d(0, 50px, 0)'
    },
    enter: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    },
    leave: {
        opacity: 0,
        transform: 'translate3d(0, 50px, 0)'
    },
    unique: true,
    trail: 80,
    config: config.slow
};
