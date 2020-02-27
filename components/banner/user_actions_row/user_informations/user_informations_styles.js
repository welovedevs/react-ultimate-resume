"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _ref;

  var spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  return _ref = {
    container: {
      display: 'flex',
      alignItems: 'center'
    },
    textColumn: {
      marginLeft: spacing * 3,
      '& > *': {
        margin: [spacing * 0.5, 0]
      }
    },
    text: {
      color: '#fff'
    },
    name: {
      extend: 'text',
      fontWeight: 700
    },
    description: {
      extend: 'text',
      fontWeight: 400
    }
  }, (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small), {
    container: {
      justifyContent: 'center'
    }
  }), (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small - (screenSizes.small - screenSizes.xs) / 2), {
    container: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    textColumn: {
      margin: [spacing * 2, 0, 0]
    }
  }), _ref;
};

exports.styles = styles;