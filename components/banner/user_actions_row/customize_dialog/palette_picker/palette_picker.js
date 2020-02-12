"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PalettePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _core = require("@material-ui/core");

var _values = _interopRequireDefault(require("values.js"));

var _ui = require("@wld/ui");

var _palettes = require("./utils/palettes");

var _palette_picker_styles = require("./palette_picker_styles");

var _select = require("../../../../commons/select/select");

var _palette_picker_translations = require("./palette_picker_translations");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_palette_picker_styles.styles);

var buildShadedPalette = function buildShadedPalette(hex) {
  var values = new _values.default(hex);
  return {
    50: "#".concat(values.tint(10).hex),
    100: "#".concat(values.tint(20).hex),
    200: "#".concat(values.tint(40).hex),
    300: "#".concat(values.tint(60).hex),
    400: "#".concat(values.tint(80).hex),
    500: hex,
    600: "#".concat(values.shade(20).hex),
    700: "#".concat(values.shade(40).hex),
    800: "#".concat(values.shade(60).hex),
    900: "#".concat(values.shade(80).hex),
    contrastDefaultColor: 'light'
  };
};

var PalettePicker = function PalettePicker(_ref) {
  var currentPalette = _ref.value,
      onChange = _ref.onChange;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var classes = useStyles();
  var selectedPalette = (0, _react.useMemo)(function () {
    var _currentPalette$prima, _currentPalette$secon, _currentPalette$terti;

    return currentPalette && [currentPalette === null || currentPalette === void 0 ? void 0 : (_currentPalette$prima = currentPalette.primary) === null || _currentPalette$prima === void 0 ? void 0 : _currentPalette$prima[500], currentPalette === null || currentPalette === void 0 ? void 0 : (_currentPalette$secon = currentPalette.secondary) === null || _currentPalette$secon === void 0 ? void 0 : _currentPalette$secon[500], currentPalette === null || currentPalette === void 0 ? void 0 : (_currentPalette$terti = currentPalette.tertiary) === null || _currentPalette$terti === void 0 ? void 0 : _currentPalette$terti[500]];
  }, [currentPalette]);
  var onSelectChanged = (0, _react.useCallback)(function (value) {
    var _value = _slicedToArray(value, 3),
        primary = _value[0],
        secondary = _value[1],
        tertiary = _value[2];

    return onChange({
      primary: buildShadedPalette(primary),
      secondary: buildShadedPalette(secondary),
      tertiary: buildShadedPalette(tertiary)
    });
  }, []);
  return _react.default.createElement("div", null, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.title
    },
    component: "h3",
    variant: "h4",
    color: "dark"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PalettePicker.field.title",
    defaultMessage: "Choose your palette"
  })), _react.default.createElement("div", {
    className: classes.picker
  }, selectedPalette && _react.default.createElement("div", {
    className: classes.currentPalette
  }, _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "PalettePicker.field.currentPalette",
    defaultMessage: "Current palette"
  })), _react.default.createElement("div", {
    className: classes.colorSquare,
    style: {
      backgroundColor: selectedPalette[0]
    }
  }), _react.default.createElement("div", {
    className: classes.colorSquare,
    style: {
      backgroundColor: selectedPalette[1]
    }
  }), _react.default.createElement("div", {
    className: classes.colorSquare,
    style: {
      backgroundColor: selectedPalette[2]
    }
  })), _react.default.createElement(_select.Select, {
    textFieldProps: {
      variant: 'flat',
      size: 'small'
    },
    value: formatMessage(_palette_picker_translations.translations.selectStub),
    onChange: onSelectChanged
  }, _palettes.palettes.map(function (palette, index) {
    return _react.default.createElement(_core.ListItem, {
      className: classes.palette,
      key: "palette_".concat(index),
      value: [palette[0], palette[2], palette[4]]
    }, index, _react.default.createElement("div", {
      className: classes.colorSquare,
      style: {
        backgroundColor: palette[0]
      }
    }), _react.default.createElement("div", {
      className: classes.colorSquare,
      style: {
        backgroundColor: palette[2]
      }
    }), _react.default.createElement("div", {
      className: classes.colorSquare,
      style: {
        backgroundColor: palette[4]
      }
    }));
  }))));
};

exports.PalettePicker = PalettePicker;