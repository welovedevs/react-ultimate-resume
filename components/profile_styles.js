"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    '@global': {
      '*': {
        'box-sizing': 'border-box'
      },
      a: {
        textDecoration: 'none',
        color: 'inherit'
      },
      '*:focus': {
        outline: 'none'
      },
      textarea: {
        resize: 'none'
      },
      button: {
        background: 'none',
        color: 'inherit',
        border: 'none',
        padding: 0,
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit'
      },
      'h1, h2, h3, h4, h5, h6': {
        margin: 0
      }
    },
    container: _objectSpread({
      minHeight: '100%',
      width: '100%',
      margin: 0,
      padding: [0, 0, spacing * 6, 0]
    }, ['fontFamily', 'backgroundColor', 'color'].reduce(function (acc, key) {
      return _objectSpread({}, acc, _defineProperty({}, key, theme.miscellaneous[key]));
    }, {}))
  };
};

exports.styles = styles;