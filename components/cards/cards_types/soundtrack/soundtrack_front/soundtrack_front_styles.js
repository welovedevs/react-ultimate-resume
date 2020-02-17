"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      fontSize: 36,
      lineHeight: 1.3,
      maxWidth: '70%'
    }
  }, _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    logo: {
      marginBottom: 0
    },
    typography: {
      maxWidth: 'unset',
      fontSize: 28
    }
  }), _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
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