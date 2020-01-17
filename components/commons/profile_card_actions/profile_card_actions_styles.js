"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      position: 'absolute',
      bottom: spacing,
      right: spacing * 4,
      display: 'flex',
      alignItems: 'center'
    }
  };
};

exports.styles = styles;