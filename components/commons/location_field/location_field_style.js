"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      marginLeft: -(spacing * 2)
    },
    popperCard: {
      zIndex: 1400
    }
  };
};

exports.styles = styles;