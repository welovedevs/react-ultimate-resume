"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      padding: [spacing * 4, spacing * 3],
      fontWeight: 600
    }
  };
};

exports.styles = styles;