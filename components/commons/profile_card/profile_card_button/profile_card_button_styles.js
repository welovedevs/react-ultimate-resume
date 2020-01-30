"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  return {
    container: {
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      marginRight: 0
    },
    typography: function typography(_ref) {
      var variant = _ref.variant,
          overrideColor = _ref.overrideColor;
      return {
        textTransform: 'unset',
        fontSize: ['14px', '!important'],
        color: [(0, _styles_utils.getHexFromPaletteColor)(theme, overrideColor || (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color), '!important']
      };
    },
    arrowContainer: {
      display: 'flex'
    },
    arrow: function arrow(_ref2) {
      var variant = _ref2.variant,
          overrideColor = _ref2.overrideColor;
      return {
        height: 28,
        color: 'inherit',
        '& > path': {
          stroke: (0, _styles_utils.getHexFromPaletteColor)(theme, overrideColor || (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color)
        }
      };
    }
  };
};

exports.styles = styles;