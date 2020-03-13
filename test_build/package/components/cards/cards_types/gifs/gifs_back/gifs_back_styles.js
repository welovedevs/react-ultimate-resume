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

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var screenSizes = theme.screenSizes,
      height = theme.components.cards.height,
      spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    image: {
      height: height,
      width: '100%',
      objectFit: 'cover'
    },
    slideName: {
      zIndex: 4,
      position: 'absolute',
      width: '100%',
      bottom: 80,
      left: 0,
      textAlign: 'center'
    },
    transitioningItemWithoutGif: _objectSpread({
      height: '100%',
      width: '100%',
      padding: [spacing * 12, spacing * 14],
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0
    }, center),
    slideNameWithoutGif: _objectSpread({
      maxHeight: '100%',
      overflow: 'auto',
      paddingRight: spacing,
      lineHeight: 'initial'
    }, (0, _styles_utils.withCustomVerticalScrollbar)('#fff')),
    slidesContainer: {
      height: '100%',
      '& .slick-slider': {
        height: '100%'
      },
      '& .slick-dots': {
        zIndex: 3,
        bottom: 35
      }
    },
    reverseArrow: {
      '& > svg': {
        transform: 'scale(-1)'
      }
    },
    nextArrow: {
      right: 35
    },
    prevArrow: {
      left: 35
    },
    arrow: function arrow(_ref) {
      var variant = _ref.variant;
      return _objectSpread({
        zIndex: 3,
        top: 'calc(50% - 25px)',
        position: 'absolute',
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backgroundColor),
        height: 50,
        width: 50,
        cursor: 'pointer',
        borderRadius: '50%'
      }, center, {
        '& > svg': {
          height: 20,
          width: 'auto',
          '& > path': {
            stroke: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color)
          }
        }
      });
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs), {
    slidesContainer: {
      '& .slick-dots': {
        display: ['none', '!important']
      }
    },
    slideName: {
      bottom: 35
    }
  });
};

exports.styles = styles;