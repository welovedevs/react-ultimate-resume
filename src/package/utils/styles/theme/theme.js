import mergeWith from 'lodash/mergeWith';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';

import { THEME_SCHEMA } from './theme_schema';
import { transformTheme } from './theme_transforms';

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
        900: '#f3d709',
        contrastDefaultColor: 'light'
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
        800: '#f6f6f6',
        900: '#fff',
        contrastDefaultColor: 'dark'
    },
    danger: {
        50: '#fdeaeb',
        100: '#fbcccc',
        200: '#f8aaaa',
        300: '#f58788',
        400: '#f26e6f',
        500: '#f05455',
        600: '#ee4d4e',
        700: '#ec4344',
        800: '#e93a3b',
        900: '#e5292a',
        A100: '#ffffff',
        A200: '#fff0f0',
        A400: '#ffbdbd',
        A700: '#ffa3a4',
        contrastDefaultColor: 'light'
    },
    safe: {
        50: '#ecf7f0',
        100: '#d0ebda',
        200: '#b1dec1',
        300: '#91d0a8',
        400: '#7ac695',
        500: '#62bc82',
        600: '#5ab67a',
        700: '#50ad6f',
        800: '#46a565',
        900: '#349752',
        A100: '#e1ffea',
        A200: '#aeffc5',
        A400: '#7bffa1',
        A700: '#62ff8f',
        contrastDefaultColor: 'light'
    }
});

export const DEFAULT_THEME = Object.freeze({
    palette: DEFAULT_PALETTE,
    miscellaneous: {
        backgroundColor: DEFAULT_PALETTE.dark[50],
        color: DEFAULT_PALETTE.dark[500],
        fontFamily: ['Avenir Next', 'Open Sans', 'Roboto', 'Arial'],
        spacing: 8
    },
    screenSizes: {
        xs: 400,
        small: 500,
        medium: 900
    },
    components: {
        banner: {
            overlayColor: 'primary',
            imageSource: 'https://cdn.filestackcontent.com/8I2wVnCRTFxypXRYLRsp'
        },
        cards: {
            height: 470,
            width: 470,
            borderRadius: 20,
            default: {
                backgroundColor: 'dark',
                color: 'light',
                backBackgroundColor: 'light',
                backColor: 'dark'
            },
            variants: [
                ['primary', 'light', 'light', 'primary'],
                ['tertiary', 'primary', 'light', 'primary'],
                ['light', 'secondary', 'light', 'secondary'],
                ['secondary', 'light', 'light', 'secondary'],
                ['light', 'primary', 'light', 'primary']
            ].map(([backgroundColor, color, backBackgroundColor, backColor]) => ({
                backgroundColor,
                color,
                backBackgroundColor,
                backColor
            }))
        }
    }
});

export const getRandomCardVariant = theme => Math.floor(Math.random() * theme.components?.cards?.variants?.length);

const mergeFunction = (objValue, srcValue) => {
    if (isArray(objValue)) {
        return srcValue;
    }
    return merge(objValue, srcValue);
};

export const buildTheme = theme => {
    const merged = mergeWith(cloneDeep(DEFAULT_THEME), theme, mergeFunction);
    try {
        THEME_SCHEMA.validateSync(merged, {
            context: { palette: merged?.palette },
            strict: true
        });
        return transformTheme(merged);
    } catch (error) {
        console.error('Invalid theme! Using default theme instead.', { error });
        return transformTheme({ ...DEFAULT_THEME });
    }
};
