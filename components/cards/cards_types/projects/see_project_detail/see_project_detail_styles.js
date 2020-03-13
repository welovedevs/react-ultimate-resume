"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    icon: {
      height: 20,
      width: 'auto',
      marginRight: spacing * 1.5,
      '& > g': {
        stroke: 'currentColor'
      }
    },
    detailTypography: {
      color: ['inherit', '!important']
    },
    typography: {
      fontWeight: 500
    }
  };
};

exports.styles = styles;