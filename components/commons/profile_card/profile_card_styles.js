"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  var _theme$components$car = theme.components.cards,
      height = _theme$components$car.height,
      width = _theme$components$car.width;
  return {
    container: function container(_ref) {
      var variant = _ref.variant;

      var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, variant),
          backgroundColor = _getColorsFromCardVar.backgroundColor,
          color = _getColorsFromCardVar.color;

      return {
        height: height,
        width: width,
        position: 'relative',
        margin: theme.miscellaneous.spacing * 2,
        borderRadius: theme.components.cards.borderRadius,
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, backgroundColor),
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, color),
        overflow: 'hidden'
      };
    },
    editButton: {
      zIndex: 2,
      position: 'absolute',
      top: spacing * 2,
      right: spacing * 2
    },
    editIcon: function editIcon(_ref2) {
      var variant = _ref2.variant;
      return {
        height: 40,
        fill: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color)
      };
    }
  };
};

exports.styles = styles;