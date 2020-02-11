"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      zIndex: 2,
      position: 'absolute',
      top: spacing * 2,
      right: spacing * 2
    }
  };
};

exports.styles = styles;