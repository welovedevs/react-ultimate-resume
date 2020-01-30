"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  return {
    container: function container(_ref) {
      var variant = _ref.variant;
      return {
        height: '45%',
        width: 'auto',
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color)
      };
    }
  };
};

exports.styles = styles;