"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardAnimatedBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _profile_card_title = require("../profile_card_title/profile_card_title");

var _profile_card_content = require("../profile_card_content/profile_card_content");

var _profile_card_animated_back_springs = require("./profile_card_animated_back_springs");

var _profile_card_animated_back_styles = require("./profile_card_animated_back_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_animated_back_styles.styles);

var TRANSLATION_INTERPOLATION = function TRANSLATION_INTERPOLATION(value) {
  return "translate3d(0, ".concat(value, "%, 0)");
};

var ProfileCardAnimatedBackComponent = function ProfileCardAnimatedBackComponent(_ref) {
  var title = _ref.title,
      content = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles();
  var contentContainerSpringReference = (0, _react.useRef)();
  var contentSpringReference = (0, _react.useRef)();
  var titleSpringReference = (0, _react.useRef)();
  var contentContainerSpringProps = (0, _reactSpring.useSpring)({
    from: _profile_card_animated_back_springs.CONTENT_CONTAINER_SPRING_PROPS.default,
    to: _profile_card_animated_back_springs.CONTENT_CONTAINER_SPRING_PROPS.active,
    ref: contentContainerSpringReference
  });
  var contentSpringProps = (0, _reactSpring.useSpring)({
    from: _profile_card_animated_back_springs.CONTENT_SPRING_PROPS.default,
    to: _profile_card_animated_back_springs.CONTENT_SPRING_PROPS.active,
    ref: contentSpringReference
  });
  var titleSpringProps = (0, _reactSpring.useSpring)({
    from: _profile_card_animated_back_springs.TITLE_SPRING_PROPS.default,
    to: _profile_card_animated_back_springs.TITLE_SPRING_PROPS.active,
    ref: titleSpringReference
  });
  (0, _reactSpring.useChain)([contentContainerSpringReference, contentSpringReference], [0, 0.2]);
  (0, _reactSpring.useChain)([contentContainerSpringReference, titleSpringReference], [0, 0.3]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_title.ProfileCardTitle, {
    component: _reactSpring.animated.div,
    style: {
      opacity: titleSpringProps.opacity,
      transform: titleSpringProps.translation.interpolate(TRANSLATION_INTERPOLATION)
    },
    customClasses: {
      typography: (0, _classnames.default)(classes.title, customClasses.title)
    }
  }, title), _react.default.createElement(_profile_card_content.ProfileCardContent, {
    customClasses: {
      container: (0, _classnames.default)(classes.content, customClasses.content)
    },
    component: _reactSpring.animated.div,
    style: {
      transform: contentContainerSpringProps.translation.interpolate(TRANSLATION_INTERPOLATION)
    }
  }, _react.default.createElement(_reactSpring.animated.div, {
    className: customClasses.contentAnimated,
    style: {
      transform: contentSpringProps.translation.interpolate(TRANSLATION_INTERPOLATION),
      opacity: contentSpringProps.opacity
    }
  }, content)));
};

var ProfileCardAnimatedBack = ProfileCardAnimatedBackComponent;
exports.ProfileCardAnimatedBack = ProfileCardAnimatedBack;