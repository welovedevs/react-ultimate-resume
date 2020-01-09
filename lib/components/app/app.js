"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _theme = require("../../utils/styles/theme");

var _app_styles = require("./app_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _reactJss.createUseStyles)(_app_styles.styles);
var DEFAULT_OPTIONS = Object.freeze({
  locale: 'en'
});

var WithProvidersApplication = function WithProvidersApplication(props) {
  var _props$options = props.options,
      options = _props$options === void 0 ? DEFAULT_OPTIONS : _props$options;
  var theme = (0, _react.useMemo)(function () {
    var built = (0, _theme.buildTheme)(options === null || options === void 0 ? void 0 : options.theme);
    console.log('Built theme:', built);
    return built;
  }, [options]);
  return _react.default.createElement(_reactJss.ThemeProvider, {
    theme: theme
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: options.locale || 'en'
  }, _react.default.createElement(Application, null)));
};

var Application = function Application() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, "coucou");
};

var App = WithProvidersApplication;
exports.App = App;