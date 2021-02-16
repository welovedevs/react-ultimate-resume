export const ANIMATED_UNDERLINED_BUTTON_TRANSITIONS_PROPS = {
    initial: {
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0)',
        transitionDuration: '0.2s'
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
