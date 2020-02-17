"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var width = theme.components.cards.width;
  return {
    container: function container(_ref) {
      var variant = _ref.variant;

      var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, variant),
          backgroundColor = _getColorsFromCardVar.backgroundColor,
          color = _getColorsFromCardVar.color;

      return {
        width: width,
        position: 'relative',
        margin: theme.miscellaneous.spacing * 2,
        borderRadius: theme.components.cards.borderRadius,
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, backgroundColor),
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, color),
        overflow: 'hidden',
        '&::before': {
          paddingTop: '100%',
          display: 'block',
          content: "''"
        }
      };
    }
  };
};

exports.styles = styles;