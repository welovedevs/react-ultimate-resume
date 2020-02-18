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
      zIndex: 2,
      position: 'absolute',
      top: spacing * 2,
      right: spacing * 2
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    container: {
      height: 40,
      width: 40
    }
  });
};

exports.styles = styles;