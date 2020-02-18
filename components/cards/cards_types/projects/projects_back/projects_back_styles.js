"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var palette = theme.palette;
  return {
    title: {
      position: 'relative',
      '& > *:not($background)': {
        zIndex: 2,
        position: 'relative'
      }
    },
    typography: {
      color: [palette.light[500], '!important']
    },
    background: _objectSpread({
      zIndex: 0,
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }, center, {
      '&::after': {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: "rgba(".concat(palette.dark.rgbShades[900].join(', '), ", .4)"),
        content: "''"
      }
    }),
    backgroundImage: {
      height: '190%',
      width: '110%',
      objectFit: 'cover',
      transform: 'rotate(-10deg)'
    }
  };
};

exports.styles = styles;