"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      color: 'inherit',
      margin: 0,
      lineHeight: 1.6,
      whiteSpace: 'pre-line',
      marginTop: spacing
    }
  };
};

exports.styles = styles;