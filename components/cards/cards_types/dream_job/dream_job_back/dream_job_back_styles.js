"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _defineProperty({
    button: {
      textAlign: 'initial'
    },
    cardTitle: {}
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    content: {
      padding: [theme.miscellaneous.spacing, '!important']
    },
    cardTitle: {
      fontSize: 28
    }
  });
};

exports.styles = styles;