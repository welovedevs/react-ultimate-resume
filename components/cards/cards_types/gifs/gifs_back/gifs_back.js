"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _gifs_sides_commons = require("../gifs_sides_commons/gifs_sides_commons");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _gifs_back_styles = require("./gifs_back_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ArrowIcon = function ArrowIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M7 16h18M16 7l9 9-9 9",
    stroke: "#F5F5F5",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

ArrowIcon.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_gifs_back_styles.styles);
var SETTINGS = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1
};

var GifsBackComponent = function GifsBackComponent(_ref) {
  var _ref2, _data$interests, _data$interests2;

  var data = _ref.data;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var hasChanged = (0, _react.useRef)();
  var handleBeforeChange = (0, _react.useCallback)(function (current, next) {
    if (!hasChanged.current) {
      hasChanged.current = true;
    }

    setCurrentIndex(next);
  }, [hasChanged.current]);
  var transitions = (0, _reactSpring.useTransition)(((_ref2 = (_data$interests = data.interests) === null || _data$interests === void 0 ? void 0 : _data$interests[currentIndex]) !== null && _ref2 !== void 0 ? _ref2 : {}).name, function (item) {
    return "gif_name_".concat(item);
  }, {
    from: {
      opacity: 0,
      transform: 'translate3d(25%, 0, 0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%, 0, 0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-25%, 0, 0)'
    },
    unique: true,
    config: _reactSpring.config.slow,
    immediate: !hasChanged.current
  });
  return _react.default.createElement(_gifs_sides_commons.GifsSidesCommons, {
    underLayer: _react.default.createElement("div", {
      className: classes.slidesContainer
    }, _react.default.createElement(_reactSlick.default, _extends({}, SETTINGS, {
      beforeChange: handleBeforeChange,
      prevArrow: _react.default.createElement(Arrow, {
        classes: classes,
        arrowRole: "prev",
        buttonProps: {
          className: classes.previousButton
        }
      }),
      nextArrow: _react.default.createElement(Arrow, {
        classes: classes,
        arrowRole: "next",
        buttonProps: {
          className: classes.nextButton
        }
      })
    }), ((_data$interests2 = data.interests) !== null && _data$interests2 !== void 0 ? _data$interests2 : []).map(function (_ref3) {
      var gifUrl = _ref3.gifUrl,
          name = _ref3.name;
      return _react.default.createElement("img", {
        className: classes.image,
        src: gifUrl,
        alt: name
      });
    })))
  }, transitions.map(function (_ref4) {
    var item = _ref4.item,
        key = _ref4.key,
        props = _ref4.props;
    return _react.default.createElement(_ui.Typography, {
      key: key,
      component: _reactSpring.animated.div,
      style: props,
      color: "light",
      variant: "h2",
      customClasses: {
        container: classes.slideName
      }
    }, item);
  }));
};

var DEFAULT_ARROW_SPRING_PROPS = Object.freeze({
  scale: 1
});
var PRESSED_ARROW_SPRING_PROPS = Object.freeze({
  scale: 0.9
});

var Arrow = function Arrow(_ref5) {
  var classes = _ref5.classes,
      onClick = _ref5.onClick,
      arrowRole = _ref5.arrowRole;

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return DEFAULT_ARROW_SPRING_PROPS;
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springProps = _useSpring2[0],
      setSpringProps = _useSpring2[1];

  var handleMouseDown = (0, _react.useCallback)(function () {
    return setSpringProps(PRESSED_ARROW_SPRING_PROPS);
  }, [setSpringProps]);
  var handleMouseUp = (0, _react.useCallback)(function () {
    return setSpringProps(DEFAULT_ARROW_SPRING_PROPS);
  }, [setSpringProps]);
  return _react.default.createElement(_reactSpring.animated.button, {
    onClick: onClick,
    className: (0, _classnames.default)(classes.arrow, arrowRole === 'next' && classes.nextArrow, arrowRole === 'prev' && (0, _classnames.default)(classes.reverseArrow, classes.prevArrow)),
    type: "button",
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onFocus: handleMouseDown,
    onBlur: handleMouseUp,
    style: {
      transform: springProps.scale.interpolate(function (value) {
        return "scale3d(".concat(value, ", ").concat(value, ", ").concat(value, ")");
      })
    }
  }, _react.default.createElement(ArrowIcon, null));
};

var GifsBack = GifsBackComponent;
exports.GifsBack = GifsBack;