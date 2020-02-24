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
  var _ref3;

  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return _ref3 = {
    background: function background(_ref) {
      var hasImage = _ref.hasImage;
      return _objectSpread({
        height: hasImage ? '50%' : '30%',
        minHeight: hasImage ? '50%' : '30%',
        width: '100%',
        backgroundColor: palette.dark[50],
        overflow: 'hidden'
      }, center);
    },
    backgroundImage: {
      height: '140%',
      width: '110%',
      objectFit: 'cover',
      transform: 'rotate(-10deg)'
    },
    content: function content() {
      return {
        height: "calc(50% - ".concat(spacing * (7 + 1), "px)"),
        padding: [spacing * 3, spacing * 12, 0],
        display: 'flex',
        alignItems: 'center',
        flex: 1
      };
    },
    stubBackground: function stubBackground(_ref2) {
      var variant = _ref2.variant;
      return {
        width: '100%',
        height: '100%',
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color)
      };
    },
    text: {
      color: 'inherit',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.4
    }
  }, (0, _defineProperty2.default)(_ref3, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
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
  }), (0, _defineProperty2.default)(_ref3, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    text: {
      fontSize: 20,
      lineHeight: 1.2
    }
  }), _ref3;
};

exports.styles = styles;