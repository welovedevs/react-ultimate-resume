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
    typography: {
      maxWidth: '65%'
    },
    noLanguage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: [spacing, spacing * 8, 0]
    },
    noLanguageTypography: {
      color: 'inherit',
      fontWeight: 700,
      lineHeight: 1.3
    },
    addButton: {
      marginTop: spacing * 4,
      marginLeft: -spacing
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    typography: {
      maxWidth: '80%',
      fontSize: 40
    }
  });
};

exports.styles = styles;