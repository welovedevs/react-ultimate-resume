"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var center = _styles_utils.flex.center;

var styles = function styles(_ref) {
  var _ref2;

  var palette = _ref.palette,
      spacing = _ref.miscellaneous.spacing,
      screenSizes = _ref.screenSizes;
  var primaryRgb = palette.primary.rgbShades[500].join(', ');
  return _ref2 = {
    container: _objectSpread({
      height: 400,
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      padding: [spacing * 4, spacing * 12]
    }, center, {
      '& > *:not($image):not($overlay)': {
        zIndex: 2
      }
    }),
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
      backgroundImage: "linear-gradient(360deg, rgba(0, 0, 0, .5) -28.58%, rgba(".concat(primaryRgb, ", 0.5) 93.05%)")
    },
    content: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: spacing * 12
    }
  }, _defineProperty(_ref2, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.medium), {
    container: {
      padding: [spacing * 4, spacing * 6]
    }
  }), _defineProperty(_ref2, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small), {
    content: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }), _defineProperty(_ref2, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small - (screenSizes.small - screenSizes.xs) / 2), {
    container: {
      height: 450
    }
  }), _defineProperty(_ref2, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    container: {
      padding: [spacing * 4, spacing * 2.5]
    }
  }), _ref2;
};

exports.styles = styles;