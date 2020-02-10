"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

var _language_column = require("./language_column/language_column");

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var _languages_back_styles = require("./languages_back_styles");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_languages_back_styles.styles);

var LanguagesBackComponent = function LanguagesBackComponent(_ref) {
  var _data$languages, _ref3;

  var data = _ref.data;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var transitions = (0, _reactSpring.useTransition)((_data$languages = data.languages) !== null && _data$languages !== void 0 ? _data$languages : [], function (_ref2) {
    var id = _ref2.id;
    return "language_column_".concat(id);
  }, {
    from: {
      transform: 'translate3d(0, 50%, 0)'
    },
    enter: {
      transform: 'translate3d(0, 0, 0)'
    },
    trail: 175 * 3 / ((_ref3 = data === null || data === void 0 ? void 0 : data.languages) !== null && _ref3 !== void 0 ? _ref3 : []).length
  });

  var _useMemo = (0, _react.useMemo)(function () {
    return {
      backColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backColor),
      backBackgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backBackgroundColor)
    };
  }, [theme, variant]),
      backColor = _useMemo.backColor,
      backBackgroundColor = _useMemo.backBackgroundColor;

  var colorPalette = (0, _react.useMemo)(function () {
    var _ref4, _data$languages2;

    return Array.from({
      length: (_ref4 = (_data$languages2 = data.languages) === null || _data$languages2 === void 0 ? void 0 : _data$languages2.length) !== null && _ref4 !== void 0 ? _ref4 : 0
    }, function (v, k) {
      return _chromaJs.default.mix(backColor, backBackgroundColor, 2 * k / 15).hex();
    });
  }, [backColor, backBackgroundColor]);
  return _react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: "Languages",
    customClasses: {
      content: classes.content,
      contentAnimated: classes.contentAnimated
    }
  }, _react.default.createElement("div", {
    className: classes.columnsContainer
  }, transitions.map(function (_ref5, index) {
    var _ref6, _data$languages3, _item$language;

    var item = _ref5.item,
        key = _ref5.key,
        props = _ref5.props;
    return _react.default.createElement(_language_column.LanguageColumn, {
      itemsSize: (_ref6 = (_data$languages3 = data.languages) === null || _data$languages3 === void 0 ? void 0 : _data$languages3.length) !== null && _ref6 !== void 0 ? _ref6 : 0,
      key: key,
      component: _reactSpring.animated.div,
      value: item.value,
      style: _objectSpread({}, props, {
        backgroundColor: colorPalette[index],
        color: backColor
      }),
      cardVariant: variant
    }, (_item$language = item.language) === null || _item$language === void 0 ? void 0 : _item$language.substring(0, 2).toUpperCase());
  })));
};

var LanguagesBack = LanguagesBackComponent;
exports.LanguagesBack = LanguagesBack;