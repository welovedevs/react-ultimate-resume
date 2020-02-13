"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaletteVisual = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _palette_visual_translations = require("./palette_visual_translations");

var _palette_visual_styles = require("./palette_visual_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_palette_visual_styles.styles);

var PaletteVisualComponent = function PaletteVisualComponent(_ref) {
  var palette = _ref.palette,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes,
      _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? _palette_visual_translations.PALETTE_KEY_TRANSLATIONS : _ref$translations;
  var classes = useStyles();
  var paletteEntries = (0, _react.useMemo)(function () {
    return Object.entries(palette !== null && palette !== void 0 ? palette : {});
  }, [palette]);

  if (!palette) {
    return null;
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, paletteEntries.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        hex = _ref3[1][500];

    return _react.default.createElement(_ui.Tooltip, {
      key: "palette_visual_color_".concat(key, "_").concat(hex),
      title: translations[key],
      customClasses: {
        popper: receivedClasses.tooltipPopper
      }
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.color, receivedClasses.color),
      style: {
        color: hex
      }
    }));
  }));
};

var PaletteVisual = PaletteVisualComponent;
exports.PaletteVisual = PaletteVisual;