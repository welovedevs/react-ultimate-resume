import PaletteHelper from 'values.js';

export const buildShadedPalette = (hex) => {
    const values = new PaletteHelper(hex);
    return {
        50: `#${values.tint(90).hex}`,
        100: `#${values.tint(80).hex}`,
        200: `#${values.tint(60).hex}`,
        300: `#${values.tint(40).hex}`,
        400: `#${values.tint(20).hex}`,
        500: hex,
        600: `#${values.shade(20).hex}`,
        700: `#${values.shade(40).hex}`,
        800: `#${values.shade(60).hex}`,
        900: `#${values.shade(80).hex}`,
        contrastDefaultColor: 'light'
    };
};
