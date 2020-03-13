"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _typography;

  var spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  var QUERY_EXTRA_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs);
  return {
    container: {},
    interestedByValue: {
      marginTop: spacing * 4
    },
    typography: (_typography = {
      fontSize: 36,
      lineHeight: 1.3,
      textOverflow: 'ellipsis',
      wordWrap: 'break-word',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 6,
      '-webkit-box-orient': 'vertical',
      maxHeight: 36 * 1.3 * 6
    }, (0, _defineProperty2.default)(_typography, QUERY_SMALL, {
      maxWidth: 'unset',
      fontSize: 28
    }), (0, _defineProperty2.default)(_typography, QUERY_EXTRA_SMALL, {
      typography: {
        padding: 0
      }
    }), _typography)
  };
};

exports.styles = styles;