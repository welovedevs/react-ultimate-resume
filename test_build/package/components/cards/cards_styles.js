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
      marginTop: -(spacing * 12),
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 2,
      flexWrap: 'wrap'
    }
  };
};

exports.styles = styles;