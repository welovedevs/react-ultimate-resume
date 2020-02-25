"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _profile_card_button_styles = require("./profile_card_button_styles");

var _use_card_variant = require("../profile_card_hooks/use_card_variant");

var ArrowRight = function ArrowRight(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M7 16h18M16 7l9 9-9 9",
    stroke: "#F5F5F5",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

ArrowRight.defaultProps = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var DEFAULT_SPRING_PROPS = {
  translation: 0
};
var ACTIVE_SPRING_PROPS = {
  translation: 6
};
var ProfileCardButtonComponent = (0, _reactJss.default)(_profile_card_button_styles.styles)(function (_ref) {
  var overrideColor = _ref.overrideColor,
      classes = _ref.classes,
      children = _ref.children,
      other = (0, _objectWithoutProperties2.default)(_ref, ["overrideColor", "classes", "children"]);

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return DEFAULT_SPRING_PROPS;
  }),
      _useSpring2 = (0, _slicedToArray2.default)(_useSpring, 2),
      springProps = _useSpring2[0],
      setSpringProps = _useSpring2[1];

  var setDefaultSpringProps = (0, _react.useCallback)(function () {
    return setSpringProps(function () {
      return DEFAULT_SPRING_PROPS;
    });
  }, []);
  var setActiveSpringProps = (0, _react.useCallback)(function () {
    return setSpringProps(function () {
      return ACTIVE_SPRING_PROPS;
    });
  }, []);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_ui.Button, (0, _extends2.default)({
    customClasses: {
      container: classes.button,
      typography: classes.typography
    },
    size: "small",
    variant: "text",
    onMouseEnter: setActiveSpringProps,
    onMouseLeave: setDefaultSpringProps,
    onFocus: setActiveSpringProps,
    onBlur: setDefaultSpringProps
  }, other), children), _react.default.createElement(_reactSpring.animated.span, {
    className: classes.arrowContainer,
    style: {
      transform: springProps.translation.interpolate(function (value) {
        return "translate3d(".concat(value, "px, 0, 0)");
      })
    }
  }, _react.default.createElement(ArrowRight, {
    className: classes.arrow
  })));
});

var InjectVariantProfileCardButton = function InjectVariantProfileCardButton(props) {
  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  return _react.default.createElement(ProfileCardButtonComponent, (0, _extends2.default)({}, props, {
    variant: variant
  }));
};

var ProfileCardButton = InjectVariantProfileCardButton;
exports.ProfileCardButton = ProfileCardButton;