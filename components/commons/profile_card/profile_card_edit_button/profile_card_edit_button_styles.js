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
      zIndex: 2,
      position: 'absolute',
      top: spacing * 2,
      right: spacing * 2
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    container: {
      height: 40,
      width: 40
    }
  });
};

exports.styles = styles;