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
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backColor),
        margin: [spacing * 3, 0],
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        }
      };
    }
  };
};

exports.styles = styles;