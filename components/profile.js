"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperProfile = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

if (!Intl.PluralRules) {
  // eslint-disable-next-line global-require
  require('@formatjs/intl-pluralrules/polyfill'); // eslint-disable-next-line global-require


  require('@formatjs/intl-pluralrules/dist/locale-data/en'); // eslint-disable-next-line global-require


  require('@formatjs/intl-pluralrules/dist/locale-data/fr');
}

var messages = {
  en: _en.default,
  fr: _fr.default
};
var useStyles = (0, _reactJss.createUseStyles)(_profile_styles.styles);
var DEFAULT_OPTIONS = Object.freeze({
  locale: 'en',
  customization: {}
});
var DEFAULT_OBJECT = {};

var DEFAULT_FUNCTION = function DEFAULT_FUNCTION() {};

var DeveloperProfileComponent = function DeveloperProfileComponent(_ref) {
  var _options$customizatio;

  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? DEFAULT_OBJECT : _ref$data,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? DEFAULT_OBJECT : _ref$options,
      mode = _ref.mode,
      _ref$onEdit = _ref.onEdit,
      onEditProps = _ref$onEdit === void 0 ? DEFAULT_FUNCTION : _ref$onEdit,
      onCustomizationChanged = _ref.onCustomizationChanged,
      _ref$isEditing = _ref.isEditing,
      isEditing = _ref$isEditing === void 0 ? false : _ref$isEditing,
      _ref$onFilesUpload = _ref.onFilesUpload,
      onFilesUpload = _ref$onFilesUpload === void 0 ?
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
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
      BeforeCards = _ref.BeforeCards,
      additionalNodes = _ref.additionalNodes,
      _ref$classes = _ref.classes,
      receivedGlobalClasses = _ref$classes === void 0 ? {} : _ref$classes;
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
        giphy: apiKeys === null || apiKeys === void 0 ? void 0 : apiKeys.giphy,
        unsplash: apiKeys === null || apiKeys === void 0 ? void 0 : apiKeys.unsplash
      },
      store: store,
      mode: mode,
      additionalNodes: additionalNodes,
      endpoints: endpoints,
      receivedGlobalClasses: receivedGlobalClasses
    };
  }, [endpoints, apiKeys, data, onEdit, store, mode]);
  console.log({
    context: context
  });
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_contexts.DeveloperProfileContext.Provider, {
    value: context
  }, _react.default.createElement(_banner.Banner, {
    customizationOptions: options.customization,
    onCustomizationChanged: onCustomizationChanged
  }), BeforeCards, _react.default.createElement(_cards.Cards, {
    cardsOrder: (_options$customizatio = options.customization) === null || _options$customizatio === void 0 ? void 0 : _options$customizatio.cardsOrder
  })));
};

var WithProvidersDeveloperProfile = function WithProvidersDeveloperProfile(_ref3) {
  var data = _ref3.data,
      onEdit = _ref3.onEdit,
      onCustomizationChanged = _ref3.onCustomizationChanged,
      _ref3$options = _ref3.options,
      options = _ref3$options === void 0 ? {} : _ref3$options,
      _ref3$mode = _ref3.mode,
      mode = _ref3$mode === void 0 ? 'readOnly' : _ref3$mode,
      additionalNodes = _ref3.additionalNodes,
      BeforeCards = _ref3.BeforeCards,
      classes = _ref3.classes,
      isEditing = _ref3.isEditing;

  var _useMemo = (0, _react.useMemo)(function () {
    return _objectSpread({}, DEFAULT_OPTIONS, {}, options);
  }, [options]),
      locale = _useMemo.locale,
      customization = _useMemo.customization;

  var builtTheme = (0, _react.useMemo)(function () {
    console.time('theme');
    var theme = (0, _theme.buildTheme)(customization === null || customization === void 0 ? void 0 : customization.theme);
    console.timeEnd('theme');
    return theme;
  }, [customization === null || customization === void 0 ? void 0 : customization.theme]);
  return _react.default.createElement(_reactJss.ThemeProvider, {
    theme: builtTheme
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: locale,
    messages: messages[locale] || messages.en,
    defaultLocale: locale
  }, _react.default.createElement(DeveloperProfileComponent, {
    isEditing: isEditing,
    data: data,
    mode: mode,
    onEdit: onEdit,
    onCustomizationChanged: onCustomizationChanged,
    options: options,
    additionalNodes: additionalNodes,
    BeforeCards: BeforeCards,
    classes: classes
  })));
};

var DeveloperProfile = WithProvidersDeveloperProfile;
exports.DeveloperProfile = DeveloperProfile;