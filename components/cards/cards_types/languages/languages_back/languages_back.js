"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesBack = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

var _language_column = require("./language_column/language_column");

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var _use_card_variant = require("../../../../hooks/profile_card_hooks/use_card_variant");

var _languages_back_spring_props = require("./languages_back_spring_props");

var _languages_back_styles = require("./languages_back_styles");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_language = require("./no_language/no_language");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useStyles = (0, _reactJss.createUseStyles)(_languages_back_styles.styles);

var LanguagesBackComponent = function LanguagesBackComponent(_ref) {
  var _data$languages$lengt, _data$languages;

  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles({
    itemSize: (_data$languages$lengt = (_data$languages = data.languages) === null || _data$languages === void 0 ? void 0 : _data$languages.length) !== null && _data$languages$lengt !== void 0 ? _data$languages$lengt : 0
  });
  return /*#__PURE__*/_react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: "Languages",
    customClasses: {
      content: classes.content,
      contentAnimated: classes.contentAnimated,
      title: classes.cardTitle
    }
  }, /*#__PURE__*/_react.default.createElement(Content, {
    data: data,
    handleAddButtonClick: handleAddButtonClick,
    classes: classes
  }));
};

var Content = function Content(_ref2) {
  var _data$languages2, _data$languages3;

  var data = _ref2.data,
      handleAddButtonClick = _ref2.handleAddButtonClick,
      classes = _ref2.classes;
  var theme = (0, _reactJss.useTheme)();

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var transitions = (0, _reactSpring.useTransition)((_data$languages2 = data.languages) !== null && _data$languages2 !== void 0 ? _data$languages2 : [], function (_ref3) {
    var id = _ref3.id;
    return "language_column_".concat(id);
  }, _objectSpread({}, _languages_back_spring_props.LANGUAGES_COLUMN_TRANSITIONS_SPRING_PROPS, {
    trail: 175 * 3 / ((_data$languages3 = data === null || data === void 0 ? void 0 : data.languages) !== null && _data$languages3 !== void 0 ? _data$languages3 : []).length
  }));

  var _useMemo = (0, _react.useMemo)(function () {
    return {
      backColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backColor),
      backBackgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backBackgroundColor)
    };
  }, [theme, variant]),
      backColor = _useMemo.backColor,
      backBackgroundColor = _useMemo.backBackgroundColor;

  var colorPalette = (0, _react.useMemo)(function () {
    var _data$languages$lengt2, _data$languages4;

    return Array.from({
      length: (_data$languages$lengt2 = (_data$languages4 = data.languages) === null || _data$languages4 === void 0 ? void 0 : _data$languages4.length) !== null && _data$languages$lengt2 !== void 0 ? _data$languages$lengt2 : 0
    }, function (v, k) {
      return _chromaJs.default.mix(backColor, backBackgroundColor, 2 * k / 15).hex();
    });
  }, [backColor, backBackgroundColor]);
  var hasLanguage = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.languages);
  }, [data]);

  if (!hasLanguage) {
    return /*#__PURE__*/_react.default.createElement(_no_language.NoLanguage, {
      handleAddButtonClick: handleAddButtonClick
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.columnsContainer
  }, transitions.map(function (_ref4, index) {
    var _data$languages$lengt3, _data$languages5, _item$language;

    var item = _ref4.item,
        key = _ref4.key,
        props = _ref4.props;
    return /*#__PURE__*/_react.default.createElement(_language_column.LanguageColumn, {
      itemsSize: (_data$languages$lengt3 = (_data$languages5 = data.languages) === null || _data$languages5 === void 0 ? void 0 : _data$languages5.length) !== null && _data$languages$lengt3 !== void 0 ? _data$languages$lengt3 : 0,
      key: key,
      component: _reactSpring.animated.div,
      item: item,
      style: _objectSpread({}, props, {
        backgroundColor: colorPalette[index],
        color: backColor
      }),
      cardVariant: variant
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: classes.languageLettersButton,
      type: "button"
    }, (_item$language = item.language) === null || _item$language === void 0 ? void 0 : _item$language.substring(0, 2).toUpperCase()));
  }));
};

var LanguagesBack = (0, _react.memo)(LanguagesBackComponent);
exports.LanguagesBack = LanguagesBack;