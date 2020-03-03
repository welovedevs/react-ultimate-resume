"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var screenSizes = theme.screenSizes;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  return {
    container: (0, _defineProperty2.default)({
      color: 'inherit',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.4,
      overflow: 'hidden',
      overflowWrap: 'break-word'
    }, QUERY_SMALL, {
      fontSize: 24,
      lineHeight: 1.2
    })
  };
};

exports.styles = styles;