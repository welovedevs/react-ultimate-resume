"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTheme = exports.getRandomCardVariant = exports.DEFAULT_THEME = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _palettes = _interopRequireDefault(require("@wld/ui/styles/palettes"));

var _theme_schema = require("./theme_schema");

var _theme_transforms = require("./theme_transforms");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_PALETTE = Object.freeze(_palettes.default);
var DEFAULT_THEME = Object.freeze({
  palette: DEFAULT_PALETTE,
  miscellaneous: {
    backgroundColor: DEFAULT_PALETTE.dark[50],
    color: DEFAULT_PALETTE.dark[500],
    fontFamily: ['Avenir Next', 'Open Sans', 'Roboto', 'Arial'],
    spacing: 8
  },
  screenSizes: {
    xs: 400,
    small: 500,
    medium: 900
  },
  components: {
    banner: {
      overlayColor: 'primary',
      imageSource: 'https://cdn.filestackcontent.com/8I2wVnCRTFxypXRYLRsp'
    },
    cards: {
      height: 470,
      width: 470,
      borderRadius: 20,
      default: {
        backgroundColor: 'dark',
        color: 'light',
        backBackgroundColor: 'light',
        backColor: 'dark'
      },
      variants: [['primary', 'light', 'light', 'primary'], ['tertiary', 'primary', 'light', 'primary'], ['light', 'secondary', 'light', 'secondary'], ['secondary', 'light', 'light', 'secondary'], ['light', 'primary', 'light', 'primary']].map(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 4),
            backgroundColor = _ref2[0],
            color = _ref2[1],
            backBackgroundColor = _ref2[2],
            backColor = _ref2[3];

        return {
          backgroundColor: backgroundColor,
          color: color,
          backBackgroundColor: backBackgroundColor,
          backColor: backColor
        };
      })
    }
  }
});
exports.DEFAULT_THEME = DEFAULT_THEME;

var getRandomCardVariant = function getRandomCardVariant(theme) {
  var _theme$components, _theme$components$car, _theme$components$car2;

  return Math.floor(Math.random() * ((_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : (_theme$components$car = _theme$components.cards) === null || _theme$components$car === void 0 ? void 0 : (_theme$components$car2 = _theme$components$car.variants) === null || _theme$components$car2 === void 0 ? void 0 : _theme$components$car2.length));
};

exports.getRandomCardVariant = getRandomCardVariant;

var mergeFunction = function mergeFunction(objValue, srcValue) {
  if ((0, _isArray.default)(objValue)) {
    return srcValue;
  }

  return (0, _merge.default)(objValue, srcValue);
};

var buildTheme = function buildTheme(theme) {
  var merged = (0, _mergeWith.default)((0, _cloneDeep.default)(DEFAULT_THEME), theme, mergeFunction);

  try {
    _theme_schema.THEME_SCHEMA.validateSync(merged, {
      context: {
        palette: merged === null || merged === void 0 ? void 0 : merged.palette
      },
      strict: true
    });

    return (0, _theme_transforms.transformTheme)(merged);
  } catch (error) {
    console.error('Invalid theme! Using default theme instead.', {
      error: error
    });
    return (0, _theme_transforms.transformTheme)(_objectSpread({}, DEFAULT_THEME));
  }
};

exports.buildTheme = buildTheme;