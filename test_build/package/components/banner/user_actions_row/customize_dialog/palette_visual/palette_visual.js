"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaletteVisual = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _palette_visual_translations = require("./palette_visual_translations");

var _palette_visual_styles = require("./palette_visual_styles");

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
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
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