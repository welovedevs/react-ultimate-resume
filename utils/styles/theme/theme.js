"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTheme = exports.getRandomCardVariant = exports.DEFAULT_THEME = void 0;

var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _theme_schema = require("./theme_schema");

var _theme_transforms = require("./theme_transforms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEFAULT_PALETTE = Object.freeze({
  primary: {
    50: '#e4e2f5',
    100: '#bdb6e6',
    200: '#9185d5',
    300: '#6454c4',
    400: '#4330b8',
    500: '#220bab',
    600: '#1e0aa4',
    700: '#19089a',
    800: '#140691',
    900: '#0c0380',
    contrastDefaultColor: 'light'
  },
  secondary: {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    contrastDefaultColor: 'light'
  },
  tertiary: {
    50: '#fefce4',
    100: '#fdf8bb',
    200: '#fcf38e',
    300: '#faee60',
    400: '#f9eb3e',
    500: '#f8e71c',
    600: '#f7e419',
    700: '#f6e014',
    800: '#f5dd11',
    900: '#f3d709',
    contrastDefaultColor: 'light'
  },
  dark: {
    50: '#efefef',
    100: '#c1c1c1',
    200: '#979797',
    300: '#6d6d6d',
    400: '#4e4e4e',
    500: '#2f2f2f',
    600: '#2a2a2a',
    700: '#232323',
    800: '#1d1d1d',
    900: '#000',
    contrastDefaultColor: 'light'
  },
  light: {
    500: '#fff',
    800: '#f6f6f6',
    900: '#fff',
    contrastDefaultColor: 'dark'
  },
  danger: {
    50: '#fdeaeb',
    100: '#fbcccc',
    200: '#f8aaaa',
    300: '#f58788',
    400: '#f26e6f',
    500: '#f05455',
    600: '#ee4d4e',
    700: '#ec4344',
    800: '#e93a3b',
    900: '#e5292a',
    A100: '#ffffff',
    A200: '#fff0f0',
    A400: '#ffbdbd',
    A700: '#ffa3a4',
    contrastDefaultColor: 'light'
  },
  safe: {
    50: '#ecf7f0',
    100: '#d0ebda',
    200: '#b1dec1',
    300: '#91d0a8',
    400: '#7ac695',
    500: '#62bc82',
    600: '#5ab67a',
    700: '#50ad6f',
    800: '#46a565',
    900: '#349752',
    A100: '#e1ffea',
    A200: '#aeffc5',
    A400: '#7bffa1',
    A700: '#62ff8f',
    contrastDefaultColor: 'light'
  }
});
var DEFAULT_THEME = Object.freeze({
  palette: DEFAULT_PALETTE,
  miscellaneous: {
    backgroundColor: DEFAULT_PALETTE.dark[50],
    color: DEFAULT_PALETTE.dark[500],
    fontFamily: ['Avenir Next', 'Open Sans', 'Roboto', 'Arial'],
    spacing: 8
  },
  screenSizes: {
    small: '@media screen and (max-width: 500px)',
    medium: '@media screen and (max-width: 900px)'
  },
  components: {
    banner: {
      overlayColor: 'primary',
      imageSource: 'https://source.unsplash.com/random/2000x6000'
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
        var _ref2 = _slicedToArray(_ref, 4),
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

var buildTheme =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(theme) {
    var merged;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            merged = (0, _mergeWith.default)((0, _cloneDeep.default)(DEFAULT_THEME), theme, mergeFunction);
            _context.prev = 1;
            _context.next = 4;
            return _theme_schema.THEME_SCHEMA.validate(merged, {
              context: {
                palette: merged === null || merged === void 0 ? void 0 : merged.palette
              },
              strict: true
            });

          case 4:
            return _context.abrupt("return", (0, _theme_transforms.transformTheme)(merged));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.error('Invalid theme! Using default theme instead.', {
              error: _context.t0
            });
            return _context.abrupt("return", (0, _theme_transforms.transformTheme)(_objectSpread({}, DEFAULT_THEME)));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function buildTheme(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.buildTheme = buildTheme;