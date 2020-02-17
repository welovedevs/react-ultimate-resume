"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var palette = theme.palette;
  return _defineProperty({
    paper: {
      width: ['100%', '!important'],
      maxWidth: ['unset', '!important'],
      backgroundColor: [palette.light[800], '!important']
    },
    dialogRoot: {}
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    dialogRoot: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  });
};

exports.styles = styles;