"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  return {
    container: function container(_ref) {
      var variant = _ref.variant,
          overrideColor = _ref.overrideColor;
      return {
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, overrideColor || (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color),
        fontWeight: 700,
        fontSize: 70,
        lineHeight: 1.1
      };
    }
  };
};

exports.styles = styles;