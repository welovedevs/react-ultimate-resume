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

export const withCustomVerticalScrollbar = (color = '#c1c1c1') => ({
    '&::-webkit-scrollbar-track': {
        border: 0
    },
    '&::-webkit-scrollbar': {
        width: 6
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: color
    }
});

export const getColorsFromCardVariant = (theme, cardVariant) =>
    theme.components.cards.variants[cardVariant] || theme.components.cards.default;

export const getHexFromPaletteColor = (theme, paletteColor, shade = 500) =>
    (theme.palette[paletteColor] ?? theme.primary)[shade];

export const getContrastDefaultColorFromPaletteColor = (theme, paletteColor) =>
    theme.palette[paletteColor].contrastDefaultColor;
