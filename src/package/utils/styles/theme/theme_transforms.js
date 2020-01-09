import get from 'lodash/get';

const hexToRgb = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF").
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    return hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
};

const THEME_TRANSFORMS = Object.freeze({
    palette: (colors) => Object.entries(colors).reduce((colorsAcc, [colorName, shades]) => {
        const colorAccumulator = colorsAcc;
        colorAccumulator[colorName].rgbShades = Object.entries(shades).reduce((shadesAcc, [shade, shadeValue]) => {
            if (isNaN(parseInt(shade, 10))) {
                return shadesAcc;
            }
            const shadesAccumulator = shadesAcc;
            shadesAccumulator[shade] = hexToRgb(shadeValue);
            return shadesAccumulator;
        }, {});
        return colorAccumulator;
    }, {})
});

export const transformTheme = (theme) => Object.entries(THEME_TRANSFORMS).reduce((acc, [path, transform]) => {
        acc[path] = transform(get(theme, path));
    }, theme);
