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
      '& > *': {
        fill: 'currentColor',
        stroke: 'currentColor'
      }
    },
    typography: {
      fontSize: 36,
      lineHeight: 1.3
    }
  }, (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    logo: {
      marginBottom: 0
    },
    typography: {
      maxWidth: 'unset',
      fontSize: 28
    }
  }), (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    logo: {
      maxHeight: '33%',
      marginBottom: spacing
    },
    typography: {
      padding: 0
    }
  }), _ref;
};

exports.styles = styles;