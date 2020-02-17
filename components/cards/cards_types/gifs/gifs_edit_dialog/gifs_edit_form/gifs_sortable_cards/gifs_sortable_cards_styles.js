"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _defineProperty({
    list: {
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap'
    },
    listItem: {
      listStyle: 'none',
      zIndex: 2120
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    list: {
      justifyContent: 'center'
    }
  });
};

exports.styles = styles;