"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    },
    underlineContainer: {
      position: 'absolute',
      bottom: -(spacing * 1.5),
      left: 0,
      height: 2,
      width: '100%',
      overflow: 'hidden',
      pointerEvents: 'none'
    },
    underline: function underline(_ref) {
      var color = _ref.color;
      return {
        height: '100%',
        width: '100%',
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, color)
      };
    }
  };
};

exports.styles = styles;