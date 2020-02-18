"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    paper: {
      width: ['100%', '!important'],
      maxWidth: ['unset', '!important'],
      backgroundColor: [palette.light[800], '!important']
    },
    content: {
      padding: [[spacing, spacing * 3, 0], '!important']
    },
    actions: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    actions: {
      position: 'unset'
    }
  });
};

exports.styles = styles;