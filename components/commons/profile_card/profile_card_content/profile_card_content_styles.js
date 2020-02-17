"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getContentBackgroundColor = function getContentBackgroundColor(theme, cardVariant) {
  var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, cardVariant),
      backBackgroundColor = _getColorsFromCardVar.backBackgroundColor,
      frontBackgroundColor = _getColorsFromCardVar.backgroundColor;

  if (frontBackgroundColor === backBackgroundColor) {
    return 'transparent';
  }

  return (0, _styles_utils.getHexFromPaletteColor)(theme, backBackgroundColor);
};

var styles = function styles(theme) {
  var _ref2;

  var spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  return _ref2 = {
    container: function container(_ref) {
      var variant = _ref.variant;
      var backHexColor = (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backColor);
      return _objectSpread({
        padding: [spacing * 4, spacing * 8],
        backgroundColor: getContentBackgroundColor(theme, variant),
        color: backHexColor,
        flex: 1,
        overflow: 'auto'
      }, (0, _styles_utils.withCustomVerticalScrollbar)((0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backColor)));
    }
  }, _defineProperty(_ref2, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small), {
    container: {
      padding: [[spacing * 4, spacing * 5], '!important']
    }
  }), _defineProperty(_ref2, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    container: {
      padding: [[spacing * 4, spacing * 3], '!important']
    }
  }), _ref2;
};

exports.styles = styles;