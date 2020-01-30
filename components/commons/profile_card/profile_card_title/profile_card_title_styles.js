"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: function container(_ref) {
      var variant = _ref.variant;
      return {
        padding: [spacing * 3, spacing * 4],
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backgroundColor)
      };
    },
    typography: function typography(_ref2) {
      var variant = _ref2.variant,
          overrideColor = _ref2.overrideColor;
      return {
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, overrideColor || (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color),
        fontSize: 48,
        lineHeight: '48px',
        fontWeight: 700
      };
    }
  };
};

exports.styles = styles;