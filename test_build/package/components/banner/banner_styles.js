"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _styles_utils = require("../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var _objectSpread2;

  var palette = theme.palette,
      screenSizes = theme.screenSizes,
      spacing = theme.miscellaneous.spacing;
  var primaryRgb = palette.primary.rgbShades[500].join(', ');
  var darkenPrimaryRgb = (0, _chromaJs.default)(palette.primary.rgbShades[500]).darken(2).rgb().join(', ');
  var QUERY_MEDIUM = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.medium);
  var QUERY_BETWEEN_MEDIUM_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2);
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  var QUERY_EXTRA_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs);
  return {
    container: _objectSpread({
      height: 400,
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      padding: [spacing * 4, spacing * 12]
    }, center, (_objectSpread2 = {
      '& > *:not($image):not($overlay)': {
        zIndex: 2
      }
    }, (0, _defineProperty2.default)(_objectSpread2, QUERY_MEDIUM, {
      padding: [spacing * 4, spacing * 6]
    }), (0, _defineProperty2.default)(_objectSpread2, QUERY_SMALL, {
      height: 450
    }), (0, _defineProperty2.default)(_objectSpread2, QUERY_EXTRA_SMALL, {
      height: [550, '!important'],
      padding: [spacing * 4, spacing * 2.5]
    }), _objectSpread2)),
    absolutePositioned: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%'
    },
    image: {
      extend: 'absolutePositioned',
      height: '100%',
      width: '100%',
      zIndex: 0,
      objectFit: 'cover'
    },
    overlay: {
      extend: 'absolutePositioned',
      zIndex: 1,
      backgroundImage: "linear-gradient(360deg, rgba(".concat(darkenPrimaryRgb, ", .9) -28.58%, rgba(").concat(primaryRgb, ", 0.7) 93.05%)")
    },
    content: (0, _defineProperty2.default)({
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: spacing * 12
    }, QUERY_BETWEEN_MEDIUM_SMALL, {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }),
    credits: {
      zIndex: [3, '!important'],
      color: 'rgba(255, 255, 255, .75)',
      position: 'absolute',
      right: spacing * 2,
      bottom: spacing * 3,
      maxWidth: 190,
      whiteSpace: 'nowrap',
      display: 'flex',
      '& > a': {
        margin: [0, spacing / 2]
      }
    },
    author: {
      flex: 1,
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  };
};

exports.styles = styles;