import get from 'lodash.get';

const hexToRgb = (hex) => {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        // eslint-disable-next-line no-bitwise
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
    }
    throw new Error('Bad Hex');
};

const THEME_TRANSFORMS = {
    palette: (colors) =>
        Object.entries(colors).reduce((colorsAcc, [colorName, shades]) => {
            const colorAccumulator = colorsAcc;
            colorAccumulator[colorName] = {
                ...shades,
                rgbShades: Object.entries(shades).reduce((shadesAcc, [shade, shadeValue]) => {
                    if (Number.isNaN(parseInt(shade, 10))) {
                        return shadesAcc;
                    }
                    const shadesAccumulator = shadesAcc;
                    shadesAccumulator[shade] = hexToRgb(shadeValue);
                    return shadesAccumulator;
                }, {})
            };
            return colorAccumulator;
        }, {})
};

export const transformTheme = (theme) =>
    Object.entries(THEME_TRANSFORMS).reduce((acc, [path, transform]) => {
        acc[path] = transform(get(theme, path));
        return acc;
    }, theme);
