"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsBack = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _gifs_sides_commons = require("../gifs_sides_commons/gifs_sides_commons");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _gifs_back_spring_props = require("./gifs_back_spring_props");

var _gifs_back_styles = require("./gifs_back_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
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
  }, _objectSpread({}, _gifs_back_spring_props.GIFS_BACK_TRANSITIONS_SPRING_PROPS, {
    immediate: !hasChanged.current
  }));
  return _react.default.createElement(_gifs_sides_commons.GifsSidesCommons, {
    underLayer: _react.default.createElement("div", {
      className: classes.slidesContainer
    }, _react.default.createElement(_reactSlick.default, (0, _extends2.default)({}, SETTINGS, {
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
        key: "gifs_back_carousel_image_".concat(gifUrl, "_").concat(name),
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
      _useSpring2 = (0, _slicedToArray2.default)(_useSpring, 2),
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