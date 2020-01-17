"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

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
      var cardVariant = _ref.cardVariant;
      return {
        textTransform: 'unset',
        fontSize: ['14px', '!important'],
        color: [(0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, cardVariant).color), '!important']
      };
    },
    arrowContainer: {
      display: 'flex'
    },
    arrow: function arrow(_ref2) {
      var cardVariant = _ref2.cardVariant;
      return {
        height: 28,
        '& > path': {
          stroke: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, cardVariant).color)
        }
      };
    }
  };
};

exports.styles = styles;