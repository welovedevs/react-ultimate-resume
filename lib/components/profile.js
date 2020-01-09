"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperProfile = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _json_stub = _interopRequireDefault(require("../../data/json_stub.json"));

var _basic_card = require("./cards/basics/basic_card");

var _theme = require("../utils/styles/theme");

var _profile_styles = require("./profile_styles");

var _resume = require("../utils/data/resume");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_styles.styles);
var DEFAULT_OPTIONS = Object.freeze({
  locale: 'en'
});

var DeveloperProfileElements = function DeveloperProfileElements(_ref) {
  var options = _ref.options;
  var classes = useStyles(_profile_styles.styles);
  var flipped = options.flipped;
  var data = (0, _resume.prepareJsonResume)(_json_stub.default);
  return _react.default.createElement("div", {
    className: classes.container
  }, "coucou");
};

var DeveloperProfile = function DeveloperProfile(_ref2) {
  var _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? {} : _ref2$options;

  var _useMemo = (0, _react.useMemo)(function () {
    return _objectSpread({}, DEFAULT_OPTIONS, {}, options);
  }, [options]),
      locale = _useMemo.locale,
      theme = _useMemo.theme;

  var profileTheme = (0, _react.useMemo)(function () {
    var built = (0, _theme.buildTheme)(theme);
    console.log('Built theme:', built);
    return built;
  }, [options]);
  return _react.default.createElement(_reactJss.ThemeProvider, {
    theme: profileTheme
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: locale
  }, _react.default.createElement(DeveloperProfileElements, {
    options: options
  })));
};

exports.DeveloperProfile = DeveloperProfile;