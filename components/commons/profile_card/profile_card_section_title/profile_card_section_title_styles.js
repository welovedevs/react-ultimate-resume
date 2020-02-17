"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _defineProperty({
    container: {
      color: 'inherit',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 1.4,
      overflow: 'hidden',
      overflowWrap: 'break-word'
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    container: {
      fontSize: 24,
      lineHeight: 1.2
    }
  });
};

exports.styles = styles;