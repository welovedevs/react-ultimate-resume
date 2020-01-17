"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      display: 'flex',
      alignItems: 'center'
    },
    textColumn: {
      marginLeft: spacing * 3,
      '& > *': {
        margin: [spacing * 0.5, 0]
      }
    },
    text: {
      color: '#fff'
    },
    name: {
      extend: 'text',
      fontWeight: 700
    },
    description: {
      extend: 'text'
    }
  };
};

exports.styles = styles;