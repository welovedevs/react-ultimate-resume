import mergeWith from 'lodash/mergeWith';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';
import DESIGN_SYSTEM_DEFAULT_PALETTE from '@wld/ui/styles/palettes';

import { THEME_SCHEMA } from './theme_schema';
import { transformTheme } from './theme_transforms';

const DEFAULT_PALETTE = Object.freeze(cloneDeep(DESIGN_SYSTEM_DEFAULT_PALETTE));

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
