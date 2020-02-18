"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  return (0, _defineProperty2.default)({
    list: {
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap'
    },
    listItem: {
      listStyle: 'none',
      zIndex: 2120
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    list: {
      justifyContent: 'center'
    }
  });
};

exports.styles = styles;