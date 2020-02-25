"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    container: {
      flexDirection: 'column'
    },
    logo: {
      marginBottom: spacing * 4,
      height: '45%',
      minHeight: '45%',
      width: 'auto'
    },
    typography: {
      fontSize: 36,
      lineHeight: 1.3
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    logo: {
      height: '40%',
      minHeight: '40%',
      marginBottom: 0
    },
    typography: {
      maxWidth: 'unset',
      fontSize: 28
    }
  });
};

exports.styles = styles;