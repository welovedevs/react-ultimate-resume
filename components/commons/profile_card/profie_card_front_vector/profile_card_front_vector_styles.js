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
      var variant = _ref.variant;
      return {
        height: '45%',
        minHeight: '45%',
        width: 'auto',
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color)
      };
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small), {
    container: function container() {
      return {
        height: '30%',
        minHeight: '30%',
        marginBottom: [spacing, '!important']
      };
    }
  });
};

exports.styles = styles;