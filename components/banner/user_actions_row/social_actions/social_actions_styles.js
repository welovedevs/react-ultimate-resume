"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _defineProperty({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, theme.screenSizes.small, {
    container: {
      flexDirection: 'column',
      justifyContent: 'unset'
    }
  });
};

exports.styles = styles;