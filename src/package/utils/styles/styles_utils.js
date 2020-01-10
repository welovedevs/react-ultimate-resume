export const flex = Object.freeze({
    center: Object.freeze({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
});

export const withCustomHorizontalScrollbar = (color = '#c1c1c1') => ({
    '&::-webkit-scrollbar-track': {
        border: 0
    },
    '&::-webkit-scrollbar': {
        height: 5
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: color
    }
});
