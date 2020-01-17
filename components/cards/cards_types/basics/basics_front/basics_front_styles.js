"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      padding: spacing * 7
    },
    title: {
      color: 'inherit',
      fontWeight: 600,
      fontSize: 70,
      lineHeight: 1.1
    }
  };
};

exports.styles = styles;