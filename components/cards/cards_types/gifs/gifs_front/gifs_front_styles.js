"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var screenSizes = theme.screenSizes,
      spacing = theme.miscellaneous.spacing;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  return {
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    image: {
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    },
    paddedFront: {
      height: 1,
      flex: 1
    },
    noHobby: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: [spacing * 2, spacing, 0]
    },
    noHobbyTypography: {
      color: 'inherit',
      fontWeight: 700,
      lineHeight: 1.3
    },
    addButton: {
      marginTop: spacing * 4,
      marginLeft: -spacing
    },
    withoutGifTypography: (0, _defineProperty2.default)({
      fontSize: 44,
      lineHeight: 1.3,
      wordWrap: 'break-word',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      maxHeight: 44 * 1.3 * 3,
      position: 'relative'
    }, QUERY_SMALL, {
      maxWidth: '80%',
      fontSize: 24,
      '-webkit-line-clamp': 3,
      maxHeight: 24 * 1.3 * 3
    })
  };
};

exports.styles = styles;