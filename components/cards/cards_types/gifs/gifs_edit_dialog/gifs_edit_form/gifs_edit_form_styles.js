"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    addButtonDashed: {
      height: 365,
      width: 300,
      margin: spacing * 2
    },
    sortableHelper: {
      zIndex: 2120
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    addButtonDashed: {
      height: 75,
      minHeight: 75
    }
  });
};

exports.styles = styles;