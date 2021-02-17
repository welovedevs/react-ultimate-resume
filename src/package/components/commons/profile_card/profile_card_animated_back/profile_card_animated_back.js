export const CONTENT_CONTAINER_PROPS = Object.freeze({
    default: {
        transform: 'translate3d(0, 100%, 0)'
    },
    active: {
        transform: 'translate3d(0, 0, 0)'
    }
});

export const CONTENT_PROPS = {
    default: {
        opacity: 0,
        transform: 'translate3d(0, 25%, 0)',
        transitionDuration: '0.2s'
    },
    active: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    }
};

export const TITLE_PROPS = {
    default: {
        transform: 'translate3d(0, -25%, 0)',
        opacity: 0,
        transitionDuration: '0.3s'
    },
    active: {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
    }
};
