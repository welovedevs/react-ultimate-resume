"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: spacing * 12
    }
  };
};

exports.styles = styles;