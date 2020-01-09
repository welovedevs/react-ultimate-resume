const DEFAULT_PALETTE = Object.freeze({
    primary: {
        50: '#e4e2f5',
        100: '#bdb6e6',
        200: '#9185d5',
        300: '#6454c4',
        400: '#4330b8',
        500: '#220bab',
        600: '#1e0aa4',
        700: '#19089a',
        800: '#140691',
        900: '#0c0380',
        contrastDefaultColor: 'light'
    },
    secondary: {
    50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb1',
        300: '#f06292',
        400: '#ec407a',
        500: '#e91e63',
        600: '#d81b60',
        700: '#c2185b',
        800: '#ad1457',
        900: '#880e4f',
        contrastDefaultColor: 'light'
    },
    tertiary: {
        50: '#fefce4',
        100: '#fdf8bb',
        200: '#fcf38e',
        300: '#faee60',
        400: '#f9eb3e',
        500: '#f8e71c',
        600: '#f7e419',
        700: '#f6e014',
        800: '#f5dd11',
        900: '#f3d709'
    },
    dark: {
        50: '#efefef',
        100: '#c1c1c1',
        200: '#979797',
        300: '#6d6d6d',
        400: '#4e4e4e',
        500: '#2f2f2f',
        600: '#2a2a2a',
        700: '#232323',
        800: '#1d1d1d',
        900: '#000',
        contrastDefaultColor: 'light'
    },
    light: {
        500: '#fff',
        contrastDefaultColor: 'dark'
    }
});

const DEFAULT_THEME = Object.freeze({
    palette: {
        primary: DEFAULT_PALETTE
    },
    miscellaneous: {
        backgroundColor: DEFAULT_PALETTE.dark[50],
        color: DEFAULT_PALETTE.dark[500],
        fontFamily: ['Avenir Next', 'Open Sans', 'Roboto', 'Arial'],
        spacing: 8,
        rounding: 8
    },
    components: {
        cards: {
            default: {
                backgroundColor: 'dark',
                color: 'light'
            },
            variants: [
                ['primary', 'light'],
                ['tertiary', 'primary'],
                ['light', 'secondary'],
                ['secondary', 'light'],
                ['light', 'primary']
            ].map(([backgroundColor, color]) => ({ backgroundColor, color }))
        }
    }
});

const deepMergeObjects = (base, toMerge) => {
    if (!base || !toMerge) {
        console.warn('Cannot merge falsy values.');
        return base;
    }
    return Object.entries(base).map((acc, [key, value]) => {
        const accumulator = acc;
        const toMergeValue = toMerge[value];
        let finalValue = value;
        if (typeof toMergeValue !== 'object' || typeof value !== 'object') {
            finalValue = toMergeValue;
        } else if (typeof value === 'object') {
            finalValue = deepMergeObjects(base, toMergeValue);
        }
    accumulator[key] = finalValue;
    return accumulator;
}, {});
};

export const buildTheme = (theme) => {
    if (!theme) {
        return DEFAULT_THEME;
    }
    return deepMergeObjects(DEFAULT_THEME, theme);
};
