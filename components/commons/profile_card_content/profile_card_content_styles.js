"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: function container(_ref) {
      var cardVariant = _ref.cardVariant;
      return {
        padding: [spacing * 3, spacing * 6],
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, cardVariant).color),
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, cardVariant).backgroundColor)
      };
    }
  };
};

exports.styles = styles;