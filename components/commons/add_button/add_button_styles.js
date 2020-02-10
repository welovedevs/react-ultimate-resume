"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    icon: function icon(_ref) {
      var color = _ref.color;
      return {
        fill: (0, _styles_utils.getHexFromPaletteColor)(theme, color),
        marginRight: spacing * 2
      };
    }
  };
};

exports.styles = styles;