"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  return _defineProperty({
    container: {
      height: '100%',
      padding: spacing * 7
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    container: {
      padding: [spacing * 4, spacing * 5]
    }
  });
};

exports.styles = styles;