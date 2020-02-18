"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  return (0, _defineProperty2.default)({
    container: {
      height: '100%',
      padding: spacing * 7
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    container: {
      padding: [spacing * 4, spacing * 5]
    }
  });
};

exports.styles = styles;