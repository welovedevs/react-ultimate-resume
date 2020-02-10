"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    addButtonDashed: {
      height: 365,
      width: 300,
      margin: spacing * 2
    },
    sortableHelper: {
      zIndex: 2120
    }
  };
};

exports.styles = styles;