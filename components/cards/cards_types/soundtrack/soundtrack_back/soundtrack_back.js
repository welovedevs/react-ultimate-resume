"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundtrackBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _loading_spinner = require("../../../../commons/loading_spinner/loading_spinner");

var _soundtrack_back_loading_spinner_transitions = require("./soundtrack_back_loading_spinner_transitions");

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _soundtrack_back_styles = require("./soundtrack_back_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_soundtrack_back_styles.styles);

var SoundtrackBackComponent = function SoundtrackBackComponent(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var _theme$components$car = theme.components.cards,
      height = _theme$components$car.height,
      width = _theme$components$car.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasLoaded = _useState2[0],
      setHasLoaded = _useState2[1];

  var color = (0, _react.useMemo)(function () {
    return (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color;
  }, [theme, variant]);
  var handleLoad = (0, _react.useCallback)(function () {
    return setHasLoaded(true);
  }, []);
  var iframeSpringProps = (0, _reactSpring.useSpring)({
    opacity: hasLoaded ? 1 : 0
  });
  var loadingSpinnerTransitions = (0, _reactSpring.useTransition)(hasLoaded, function (item) {
    return "".concat(item ? 'invisible' : 'visible', "_loading_soundtrack_spinner");
  }, _objectSpread({}, _soundtrack_back_loading_spinner_transitions.LOADING_SPINNER_TRANSITIONS, {
    unique: true
  }));
  return _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, _react.default.createElement("span", {
    className: classes.loadingSpinnerContainer
  }, loadingSpinnerTransitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return !item && _react.default.createElement(_reactSpring.animated.span, {
      key: key,
      className: classes.loadingSpinnerChild,
      style: props
    }, _react.default.createElement(_loading_spinner.LoadingSpinner, {
      color: color
    }));
  })), _react.default.createElement(_reactSpring.animated.iframe, {
    className: classes.iframe,
    title: "Soundtrack",
    src: data.embedUrl,
    height: height,
    width: width,
    frameBorder: "0",
    allow: "encrypted-media",
    onLoad: handleLoad,
    style: iframeSpringProps
  }));
};

var SoundtrackBack = SoundtrackBackComponent;
exports.SoundtrackBack = SoundtrackBack;