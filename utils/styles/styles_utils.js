"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHexFromPaletteColor = exports.getColorsFromCardVariant = exports.withCustomHorizontalScrollbar = exports.flex = void 0;
var flex = Object.freeze({
  center: Object.freeze({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
});
exports.flex = flex;

var withCustomHorizontalScrollbar = function withCustomHorizontalScrollbar() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#c1c1c1';
  return {
    '&::-webkit-scrollbar-track': {
      border: 0
    },
    '&::-webkit-scrollbar': {
      height: 5
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: color
    }
  };
};

exports.withCustomHorizontalScrollbar = withCustomHorizontalScrollbar;

var getColorsFromCardVariant = function getColorsFromCardVariant(theme, cardVariant) {
  return theme.components.cards.variants[cardVariant] || theme.components.cards.default;
};

exports.getColorsFromCardVariant = getColorsFromCardVariant;

var getHexFromPaletteColor = function getHexFromPaletteColor(theme, paletteColor) {
  var shade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return theme.palette[paletteColor][shade];
};

exports.getHexFromPaletteColor = getHexFromPaletteColor;