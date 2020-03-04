"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var screenSizes = theme.screenSizes,
      spacing = theme.miscellaneous.spacing;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  return {
    container: (0, _defineProperty2.default)({
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      marginLeft: spacing * 3
    }, QUERY_SMALL, {
      width: '100%',
      marginTop: spacing * 2,
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 'unset',
      '& > *': {
        width: '100%'
      }
    })
  };
};

exports.styles = styles;