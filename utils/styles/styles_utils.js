"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScreenWidthMediaQuery = exports.getContrastDefaultColorFromPaletteColor = exports.getHexFromPaletteColor = exports.getColorsFromCardVariant = exports.withCustomVerticalScrollbar = exports.withCustomHorizontalScrollbar = exports.flex = void 0;
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
    },
    scrollbarWidth: 'thin',
    scrollbarColor: "".concat(color, " transparent")
  };
};

exports.withCustomHorizontalScrollbar = withCustomHorizontalScrollbar;

var withCustomVerticalScrollbar = function withCustomVerticalScrollbar() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#c1c1c1';
  return {
    '&::-webkit-scrollbar-track': {
      border: 0
    },
    '&::-webkit-scrollbar': {
      width: 6
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: color
    },
    scrollbarWidth: 'thin',
    scrollbarColor: "".concat(color, " transparent")
  };
};

exports.withCustomVerticalScrollbar = withCustomVerticalScrollbar;

var getColorsFromCardVariant = function getColorsFromCardVariant(theme, cardVariant) {
  return theme.components.cards.variants[cardVariant] || theme.components.cards.default;
};

exports.getColorsFromCardVariant = getColorsFromCardVariant;

var getHexFromPaletteColor = function getHexFromPaletteColor(theme, paletteColor) {
  var _theme$palette$palett;

  var shade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return ((_theme$palette$palett = theme.palette[paletteColor]) !== null && _theme$palette$palett !== void 0 ? _theme$palette$palett : theme.primary)[shade];
};

exports.getHexFromPaletteColor = getHexFromPaletteColor;

var getContrastDefaultColorFromPaletteColor = function getContrastDefaultColorFromPaletteColor(theme, paletteColor) {
  return theme.palette[paletteColor].contrastDefaultColor;
};

exports.getContrastDefaultColorFromPaletteColor = getContrastDefaultColorFromPaletteColor;

var createScreenWidthMediaQuery = function createScreenWidthMediaQuery() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'max-width';
  var value = arguments.length > 1 ? arguments[1] : undefined;
  return "@media screen and (".concat(key, ": ").concat(value, "px)");
};

exports.createScreenWidthMediaQuery = createScreenWidthMediaQuery;