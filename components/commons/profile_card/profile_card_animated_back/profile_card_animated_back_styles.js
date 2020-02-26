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
  var QUERY_EXTRA_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs);
  return {
    title: (0, _defineProperty2.default)({}, QUERY_EXTRA_SMALL, {
      fontSize: 28
    }),
    content: (0, _defineProperty2.default)({}, QUERY_EXTRA_SMALL, {
      paddingTop: "".concat(spacing * 2, "px !important"),
      paddingLeft: "".concat(spacing * 3, "px !important"),
      paddingRight: "".concat(spacing * 3, "px !important"),
      paddingBottom: "".concat(spacing, "px !important")
    })
  };
};

exports.styles = styles;