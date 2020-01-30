"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing,
      palette = theme.palette;
  return {
    container: {
      height: 125,
      width: 200,
      minHeight: 125,
      minWidth: 200,
      margin: spacing,
      borderRadius: 5,
      overflow: 'hidden',
      border: [1, 'dashed', palette.dark[300]]
    }
  };
};

exports.styles = styles;