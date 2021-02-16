export const EXPERIENCE_CONTENT_TRANSITION_PROPS = {
    initial: {
        opacity: 0,
        transform: 'translate3d(-20px, 0, 0)',
        transitionDuration: '.5s',
        transitionDelay: '.2s'
    },
    animate: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    },
    exit: {
        opacity: 0,
        transform: 'translate3d(-20px, 0, 0)'
    }
};
