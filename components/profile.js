"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperProfile = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _theme = require("../utils/styles/theme/theme");

var _banner = require("./banner/banner");

var _cards = require("./cards/cards");

var _profile_styles = require("./profile_styles");

var _en = _interopRequireDefault(require("../i18n/en.json"));

var _fr = _interopRequireDefault(require("../i18n/fr.json"));

var _technologies_reducer = require("../store/technologies/technologies_reducer");

var _contexts = require("../utils/context/contexts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var messages = {
  en: _en.default,
  fr: _fr.default
};
var useStyles = (0, _reactJss.createUseStyles)(_profile_styles.styles);
var DEFAULT_OPTIONS = Object.freeze({
  locale: 'en'
});
var DEFAULT_OBJECT = {};

var DEFAULT_FUNCTION = function DEFAULT_FUNCTION() {};

var DeveloperProfileComponent = function DeveloperProfileComponent(_ref) {
  var _options$customizatio;

  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? DEFAULT_OBJECT : _ref$data,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? DEFAULT_OBJECT : _ref$options,
      _ref$onEdit = _ref.onEdit,
      onEditProps = _ref$onEdit === void 0 ? DEFAULT_FUNCTION : _ref$onEdit,
      _ref$onCustomizationC = _ref.onCustomizationChanged,
      onCustomizationChanged = _ref$onCustomizationC === void 0 ? DEFAULT_FUNCTION : _ref$onCustomizationC,
      _ref$isEditing = _ref.isEditing,
      isEditing = _ref$isEditing === void 0 ? false : _ref$isEditing,
      _ref$onFilesUpload = _ref.onFilesUpload,
      onFilesUpload = _ref$onFilesUpload === void 0 ?
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", // eslint-disable-next-line no-undef
            fetch('https://api.thecatapi.com/v1/images/search', {
              headers: {}
            }).then(function (res) {
              return res.json();
            }).then(function (results) {
              var _results$;

              return results === null || results === void 0 ? void 0 : (_results$ = results[0]) === null || _results$ === void 0 ? void 0 : _results$.url;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })) : _ref$onFilesUpload,
      ActionButtons = _ref.ActionButtons,
      BeforeCards = _ref.BeforeCards;
  var apiKeys = options.apiKeys,
      endpoints = options.endpoints;
  var classes = useStyles(_profile_styles.styles);
  var onEdit = (0, _react.useCallback)(function (newData) {
    if (typeof onEditProps === 'function') {
      onEditProps(newData);
    }
  }, []);
  var store = {
    technologies: (0, _react.useReducer)(_technologies_reducer.technologiesReducer, _technologies_reducer.technologiesInitialState)
  };
  var context = (0, _react.useMemo)(function () {
    return {
      data: data,
      isEditing: isEditing,
      onEdit: onEdit,
      onCustomizationChanged: onCustomizationChanged,
      onFilesUpload: onFilesUpload,
      apiKeys: {
        giphy: apiKeys === null || apiKeys === void 0 ? void 0 : apiKeys.giphy
      },
      store: store,
      endpoints: {
        devicons: endpoints === null || endpoints === void 0 ? void 0 : endpoints.devicons
      }
    };
  }, [endpoints, apiKeys, data, onEdit, store]);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_contexts.DeveloperProfileContext.Provider, {
    value: context
  }, _react.default.createElement(_banner.Banner, {
    customizationOptions: options.customization
  }, ActionButtons), BeforeCards, _react.default.createElement(_cards.Cards, {
    cardsOrder: (_options$customizatio = options.customization) === null || _options$customizatio === void 0 ? void 0 : _options$customizatio.cardsOrder
  })));
};

var WithProvidersDeveloperProfile = function WithProvidersDeveloperProfile(_ref3) {
  var data = _ref3.data,
      onEdit = _ref3.onEdit,
      onCustomizationChanged = _ref3.onCustomizationChanged,
      _ref3$options = _ref3.options,
      options = _ref3$options === void 0 ? {} : _ref3$options,
      ActionButtons = _ref3.ActionButtons,
      BeforeCards = _ref3.BeforeCards,
      isEditing = _ref3.isEditing;

  var _useMemo = (0, _react.useMemo)(function () {
    return _objectSpread({}, DEFAULT_OPTIONS, {}, options);
  }, [options]),
      locale = _useMemo.locale,
      customization = _useMemo.customization;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      builtTheme = _useState2[0],
      setBuiltTheme = _useState2[1];

  (0, _react.useEffect)(function () {
    var asyncBuild =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var built;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _theme.buildTheme)(customization === null || customization === void 0 ? void 0 : customization.theme);

              case 2:
                built = _context2.sent;
                console.log('🎨 Built theme:', built);
                setBuiltTheme(built);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function asyncBuild() {
        return _ref4.apply(this, arguments);
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
    locale: locale,
    messages: messages[locale] || messages.en,
    defaultLocale: locale
  }, _react.default.createElement(DeveloperProfileComponent, {
    isEditing: isEditing,
    data: data,
    onEdit: onEdit,
    onCustomizationChanged: onCustomizationChanged,
    options: options,
    ActionButtons: ActionButtons,
    BeforeCards: BeforeCards
  })));
};

var DeveloperProfile = WithProvidersDeveloperProfile;
exports.DeveloperProfile = DeveloperProfile;