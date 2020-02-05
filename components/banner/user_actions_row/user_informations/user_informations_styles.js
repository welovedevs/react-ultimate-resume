"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return _defineProperty({
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
  }, theme.screenSizes.small, {
    container: {
      flexDirection: 'column',
      justifyContent: 'center'
    },
    textColumn: {
      marginLeft: 'unset'
    }
  });
};

exports.styles = styles;