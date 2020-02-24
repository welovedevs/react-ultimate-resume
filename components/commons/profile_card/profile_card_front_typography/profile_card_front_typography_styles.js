"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var screenSizes = theme.screenSizes,
      spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    container: function container(_ref) {
      var variant = _ref.variant,
          overrideColor = _ref.overrideColor;
      return {
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, overrideColor || (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color),
        fontWeight: 700,
        fontSize: 64,
        lineHeight: 1.1,
        padding: spacing * 3
      };
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small), {
    container: {
      padding: spacing * 2
    }
  });
};

exports.styles = styles;