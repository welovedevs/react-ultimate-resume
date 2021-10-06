const palettes = require('@welovedevs/ui/styles/palette');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            ...palettes,
            white: '#FFF',
            black: '#000'
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
