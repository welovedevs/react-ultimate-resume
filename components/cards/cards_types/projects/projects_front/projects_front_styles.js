"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var _ref;

  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return _ref = {
    background: _objectSpread({
      height: '50%',
      minHeight: '50%',
      width: '100%',
      backgroundColor: palette.dark[50],
      overflow: 'hidden'
    }, center),
    backgroundImage: {
      height: '140%',
      width: '110%',
      objectFit: 'cover',
      transform: 'rotate(-10deg)'
    },
    content: {
      height: "calc(50% - ".concat(spacing * (7 + 1), "px)"),
      padding: [spacing * 3, spacing * 12, 0],
      display: 'flex',
      alignItems: 'center'
    },
    text: {
      color: 'inherit',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.4
    }
  }, _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    content: {
      padding: [spacing * 3, spacing * 6, 0],
      height: "calc(60% - ".concat(spacing * (7 + 1), "px)")
    },
    text: {
      fontSize: 24,
      lineHeight: 1.2
    },
    background: {
      height: '40%',
      minHeight: '40%'
    }
  }), _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    text: {
      fontSize: 20,
      lineHeight: 1.2
    }
  }), _ref;
};

exports.styles = styles;