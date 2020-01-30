"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      flexDirection: 'column'
    },
    logo: {
      marginBottom: spacing * 4,
      '& > g > path': {
        fill: 'currentColor'
      }
    },
    typography: {
      fontSize: 36,
      lineHeight: 1.3,
      maxWidth: '70%'
    }
  };
};

exports.styles = styles;