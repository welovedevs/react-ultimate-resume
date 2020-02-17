"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _ref;

  var width = theme.components.cards.width,
      screenSizes = theme.screenSizes,
      spacing = theme.miscellaneous.spacing;
  return _ref = {
    container: {
      flexDirection: 'column'
    },
    location: {
      width: '100%',
      fontWeight: 500,
      fontSize: 32,
      paddingTop: spacing * 2
    },
    mainTypography: {}
  }, _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', width + spacing * 2 * 2), {
    mainTypography: {},
    location: {
      fontSize: 24
    }
  }), _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    mainTypography: {
      fontSize: 28,
      paddingBottom: 0
    },
    location: {
      fontSize: 20
    }
  }), _ref;
};

exports.styles = styles;