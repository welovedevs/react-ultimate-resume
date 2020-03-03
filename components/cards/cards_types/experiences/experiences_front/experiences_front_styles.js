"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var screenSizes = theme.screenSizes;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  return {
    container: {
      flexDirection: 'column'
    },
    typography: (0, _defineProperty2.default)({
      fontSize: 44,
      lineHeight: 1.3,
      wordWrap: 'break-word',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 5,
      '-webkit-box-orient': 'vertical',
      maxHeight: 44 * 1.3 * 5
    }, QUERY_SMALL, {
      maxWidth: '80%',
      fontSize: 24,
      '-webkit-line-clamp': 4,
      maxHeight: 24 * 1.3 * 4
    })
  };
};

exports.styles = styles;