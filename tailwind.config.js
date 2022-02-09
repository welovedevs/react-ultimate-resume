const palettes = require('@welovedevs/ui/styles/palette');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
