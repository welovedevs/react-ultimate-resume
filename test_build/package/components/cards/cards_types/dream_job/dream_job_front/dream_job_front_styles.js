"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = {
  container: {
    flexDirection: 'column'
  },
  logo: function logo(_ref) {
    var theme = _ref.theme;
    return (0, _defineProperty2.default)({
      marginBottom: theme.miscellaneous.spacing * 4,
      '& path': {
        fill: ['currentColor', '!important']
      }
    }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
      '& path': {
        fill: ['currentColor', '!important']
      }
    });
  },
  typography: function typography(_ref3) {
    var _ref4;

    var theme = _ref3.theme;
    return _ref4 = {
      overflow: 'hidden',
      minHeight: 'fit-content',
      fontSize: 36,
      lineHeight: 1.3,
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical'
    }, (0, _defineProperty2.default)(_ref4, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
      fontSize: 28,
      wordWrap: 'break-word',
      '-webkit-line-clamp': 2,
      lineHeight: 1.2
    }), (0, _defineProperty2.default)(_ref4, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
      fontSize: 24
    }), _ref4;
  }
};
exports.styles = styles;