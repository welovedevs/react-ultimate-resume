"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsBack = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _gifs_sides_commons = require("../gifs_sides_commons/gifs_sides_commons");

var _use_card_variant = require("../../../../hooks/profile_card_hooks/use_card_variant");

var _gifs_back_spring_props = require("./gifs_back_spring_props");

var _gifs_back_styles = require("./gifs_back_styles");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_hobby = require("./no_hobby/no_hobby");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ArrowIcon = function ArrowIcon(props) {
  return (/*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
      d: "M7 16h18M16 7l9 9-9 9",
      stroke: "#F5F5F5",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  );
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
  var _data$interests;

  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;

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
  var sliderReference = (0, _react.useRef)();
  var pauseSlider = (0, _react.useCallback)(function () {
    var _sliderReference$curr;

    return (_sliderReference$curr = sliderReference.current) === null || _sliderReference$curr === void 0 ? void 0 : _sliderReference$curr.slickPause();
  }, []);
  var resumeSlider = (0, _react.useCallback)(function () {
    var _sliderReference$curr2;

    return (_sliderReference$curr2 = sliderReference.current) === null || _sliderReference$curr2 === void 0 ? void 0 : _sliderReference$curr2.slickPlay();
  }, []);
  return (/*#__PURE__*/_react.default.createElement(_gifs_sides_commons.GifsSidesCommons, {
      underLayer: /*#__PURE__*/_react.default.createElement("div", {
        className: classes.slidesContainer
      }, /*#__PURE__*/_react.default.createElement(_reactSlick.default, (0, _extends2.default)({}, SETTINGS, {
        ref: sliderReference,
        beforeChange: handleBeforeChange,
        prevArrow: /*#__PURE__*/_react.default.createElement(Arrow, {
          classes: classes,
          arrowRole: "prev",
          buttonProps: {
            className: classes.previousButton
          }
        }),
        nextArrow: /*#__PURE__*/_react.default.createElement(Arrow, {
          classes: classes,
          arrowRole: "next",
          buttonProps: {
            className: classes.nextButton
          }
        })
      }), ((_data$interests = data.interests) !== null && _data$interests !== void 0 ? _data$interests : []).map(function (_ref2) {
        var gifUrl = _ref2.gifUrl,
            name = _ref2.name;
        return (/*#__PURE__*/_react.default.createElement(SlideItem, {
            gifUrl: gifUrl,
            name: name,
            classes: classes
          })
        );
      })))
    }, /*#__PURE__*/_react.default.createElement(Content, {
      data: data,
      hasChanged: hasChanged,
      currentIndex: currentIndex,
      pauseSlider: pauseSlider,
      resumeSlider: resumeSlider,
      handleAddButtonClick: handleAddButtonClick,
      classes: classes
    }))
  );
};

var Content = function Content(_ref3) {
  var _ref4, _data$interests2;

  var data = _ref3.data,
      pauseSlider = _ref3.pauseSlider,
      hasChanged = _ref3.hasChanged,
      currentIndex = _ref3.currentIndex,
      resumeSlider = _ref3.resumeSlider,
      handleAddButtonClick = _ref3.handleAddButtonClick,
      classes = _ref3.classes;
  var hasHobby = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.interests);
  }, [data]);
  var transitions = (0, _reactSpring.useTransition)((_ref4 = (_data$interests2 = data.interests) === null || _data$interests2 === void 0 ? void 0 : _data$interests2[currentIndex]) !== null && _ref4 !== void 0 ? _ref4 : {}, function (item) {
    return "gif_name_".concat(item.name);
  }, _objectSpread({}, _gifs_back_spring_props.GIFS_BACK_TRANSITIONS_SPRING_PROPS, {
    immediate: !hasChanged.current
  }));

  if (!hasHobby) {
    return (/*#__PURE__*/_react.default.createElement(_no_hobby.NoHobby, {
        handleAddButtonClick: handleAddButtonClick
      })
    );
  }

  return transitions.map(function (_ref5) {
    var item = _ref5.item,
        key = _ref5.key,
        props = _ref5.props;
    return (item === null || item === void 0 ? void 0 : item.name) && /*#__PURE__*/_react.default.createElement(TransitioningItem, {
      item: item,
      key: key,
      props: props,
      classes: classes,
      pauseSlider: pauseSlider,
      resumeSlider: resumeSlider
    });
  });
};

var DEFAULT_ARROW_SPRING_PROPS = Object.freeze({
  scale: 1
});
var PRESSED_ARROW_SPRING_PROPS = Object.freeze({
  scale: 0.9
});

var Arrow = function Arrow(_ref6) {
  var classes = _ref6.classes,
      onClick = _ref6.onClick,
      arrowRole = _ref6.arrowRole;

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
  return (/*#__PURE__*/_react.default.createElement(_reactSpring.animated.button, {
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
    }, /*#__PURE__*/_react.default.createElement(ArrowIcon, null))
  );
};

var SlideItem = function SlideItem(_ref7) {
  var gifUrl = _ref7.gifUrl,
      name = _ref7.name,
      classes = _ref7.classes;

  if (!gifUrl) {
    return (/*#__PURE__*/_react.default.createElement("div", {
        className: classes.solidBackground
      })
    );
  }

  return (/*#__PURE__*/_react.default.createElement("img", {
      key: "gifs_back_carousel_image_".concat(gifUrl, "_").concat(name),
      className: classes.image,
      src: gifUrl,
      alt: name
    })
  );
};

var TransitioningItem = function TransitioningItem(_ref8) {
  var item = _ref8.item,
      key = _ref8.key,
      props = _ref8.props,
      pauseSlider = _ref8.pauseSlider,
      resumeSlider = _ref8.resumeSlider,
      classes = _ref8.classes;

  if (!(item === null || item === void 0 ? void 0 : item.gifUrl)) {
    return (/*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
        key: key,
        className: classes.transitioningItemWithoutGif,
        style: props,
        onMouseEnter: pauseSlider,
        onMouseLeave: resumeSlider
      }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
        customClasses: {
          container: classes.slideNameWithoutGif
        },
        color: "light",
        variant: "h3",
        component: "h4"
      }, item.name))
    );
  }

  return (/*#__PURE__*/_react.default.createElement(_ui.Typography, {
      key: key,
      customClasses: {
        container: classes.slideName
      },
      component: _reactSpring.animated.div,
      style: props,
      color: "light",
      variant: "h2"
    }, item.name)
  );
};

var GifsBack = (0, _react.memo)(GifsBackComponent);
exports.GifsBack = GifsBack;