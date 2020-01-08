export const buildTheme = (userTheme = { palette: [] }) => {
    return {
        spacing: 8,
        rounding: 10,
        defaultCard: {
            backgroundColor: '#efefef',
            color: 'black'
        },
        cards: [
            {
                backgroundColor: userTheme.palette[0] || '#F7F05C',
                color: userTheme.palette[1] || '#1F0A9F'
            }
        ]
    };
};
