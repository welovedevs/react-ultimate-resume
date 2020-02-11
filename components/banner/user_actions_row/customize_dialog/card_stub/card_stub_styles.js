"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  return {
    wrapper: {
      margin: theme.miscellaneous.spacing,
      width: 150
    },
    card: function card(_ref) {
      var variant = _ref.variant;

      var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, variant),
          backgroundColor = _getColorsFromCardVar.backgroundColor,
          color = _getColorsFromCardVar.color;

      return {
        width: 150,
        height: 150,
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, color),
        '& .to-color': {
          transition: 'fill 500ms',
          fill: 'currentColor'
        },
        '& .to-fill': {
          transition: 'fill 500ms',
          fill: [(0, _styles_utils.getHexFromPaletteColor)(theme, backgroundColor), '!important']
        }
      };
    },
    colorSquare: {
      width: theme.miscellaneous.spacing * 3,
      height: theme.miscellaneous.spacing * 3,
      borderRadius: theme.miscellaneous.spacing,
      margin: [0, theme.miscellaneous.spacing],
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.33)'
    }
  };
};

exports.styles = styles;