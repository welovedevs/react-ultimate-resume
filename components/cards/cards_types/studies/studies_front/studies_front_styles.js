"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _ref;

  var spacing = theme.miscellaneous.spacing;
  return _ref = {
    container: {
      flexDirection: 'column'
    },
    logo: {
      marginBottom: spacing * 4,
      '& > path': {
        fill: 'currentColor'
      }
    },
    typography: {
      overflow: 'hidden',
      minHeight: 'fit-content',
      fontSize: 36,
      lineHeight: 1.3,
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical'
    }
  }, (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    typography: {
      fontSize: 28,
      wordWrap: 'break-word',
      '-webkit-line-clamp': 2,
      lineHeight: 1.2
    }
  }), (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    typography: {
      fontSize: 24
    }
  }), _ref;
};

exports.styles = styles;