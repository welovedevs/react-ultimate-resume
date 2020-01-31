"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperProfile = exports.DeveloperProfileContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _theme = require("../utils/styles/theme/theme");

var _resume = require("../utils/data/resume");

var _banner = require("./banner/banner");

var _cards = require("./cards/cards");

var _profile_styles = require("./profile_styles");

var _technologies_reducer = require("../store/technologies/technologies_reducer");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_styles.styles);
var DEFAULT_OPTIONS = Object.freeze({
  locale: 'en'
});
var DeveloperProfileContext = (0, _react.createContext)({});
exports.DeveloperProfileContext = DeveloperProfileContext;
var DEFAULT_OBJECT = {};
var DEFAULT_FUNCTION = {};

var DeveloperProfileComponent = function DeveloperProfileComponent(_ref) {
  var _ref$data = _ref.data,
      dataProps = _ref$data === void 0 ? DEFAULT_OBJECT : _ref$data,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? DEFAULT_OBJECT : _ref$options,
      _ref$onEdit = _ref.onEdit,
      onEditProps = _ref$onEdit === void 0 ? DEFAULT_FUNCTION : _ref$onEdit,
      ActionButtons = _ref.ActionButtons;
  var classes = useStyles(_profile_styles.styles);

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var data = (0, _react.useMemo)(function () {
    return (0, _resume.prepareJsonResume)(dataProps);
  }, [JSON.stringify(dataProps)]);
  var onEdit = (0, _react.useCallback)(function (newData) {
    if (typeof onEditProps === 'function') {
      onEditProps(newData);
      return;
    }
  }, []);
  var store = {
    technologies: (0, _react.useReducer)(_technologies_reducer.technologiesReducer, _technologies_reducer.technologiesInitialState)
  };
  var context = (0, _react.useMemo)(function () {
    var _options$apiKeys, _options$endpoints;

    console.log('on usememoise le contexte dans DeveloperProfileComponent');
    return {
      data: data,
      isEditing: isEditing,
      onEdit: onEdit,
      apiKeys: {
        giphy: options === null || options === void 0 ? void 0 : (_options$apiKeys = options.apiKeys) === null || _options$apiKeys === void 0 ? void 0 : _options$apiKeys.giphy
      },
      store: store,
      endpoints: {
        devicons: options === null || options === void 0 ? void 0 : (_options$endpoints = options.endpoints) === null || _options$endpoints === void 0 ? void 0 : _options$endpoints.devicons
      }
    };
  }, [options, data, isEditing, onEdit, store]);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(DeveloperProfileContext.Provider, {
    value: context
  }, _react.default.createElement(_banner.Banner, null, ActionButtons), _react.default.createElement(_cards.Cards, null)));
};

var WithProvidersDeveloperProfile = function WithProvidersDeveloperProfile(_ref2) {
  var data = _ref2.data,
      onEdit = _ref2.onEdit,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? {} : _ref2$options,
      ActionButtons = _ref2.ActionButtons;

  var _useMemo = (0, _react.useMemo)(function () {
    return _objectSpread({}, DEFAULT_OPTIONS, {}, options);
  }, [options]),
      locale = _useMemo.locale,
      theme = _useMemo.theme;

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      builtTheme = _useState4[0],
      setBuiltTheme = _useState4[1];

  (0, _react.useEffect)(function () {
    var asyncBuild =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var built;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _theme.buildTheme)(theme);

              case 2:
                built = _context.sent;
                console.log('🎨 Built theme:', built);
                setBuiltTheme(built);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function asyncBuild() {
        return _ref3.apply(this, arguments);
      };
    }();

    asyncBuild();
  }, [JSON.stringify(options)]);

  if (!builtTheme) {
    return null;
  }

  return _react.default.createElement(_reactJss.ThemeProvider, {
    theme: builtTheme
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: locale
  }, _react.default.createElement(DeveloperProfileComponent, {
    data: data,
    onEdit: onEdit,
    options: options,
    ActionButtons: ActionButtons
  })));
};

var DeveloperProfile = WithProvidersDeveloperProfile;
exports.DeveloperProfile = DeveloperProfile;