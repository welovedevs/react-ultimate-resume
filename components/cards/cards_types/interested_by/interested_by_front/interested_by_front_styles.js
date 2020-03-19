"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles(theme) {
  var _typography;

  var spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  var QUERY_EXTRA_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs);
  return {
    container: function container(_ref) {
      var overrideColor = _ref.overrideColor;
      return _objectSpread({}, overrideColor && {
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, overrideColor)
      });
    },
    interestedByValue: {
      marginTop: spacing * 4
    },
    noInterested: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: [spacing, spacing * 2, 0]
    },
    noInterestedTypography: {
      color: 'inherit',
      fontWeight: 700,
      lineHeight: 1.3
    },
    addButton: {
      marginTop: spacing * 4,
      marginLeft: -spacing
    },
    typography: (_typography = {
      fontSize: 36,
      lineHeight: 1.3,
      textOverflow: 'ellipsis',
      wordWrap: 'break-word',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical',
      maxHeight: 36 * 1.3 + spacing * 4 + 36 * 1.3 * 4
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