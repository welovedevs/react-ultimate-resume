"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _arrowRight = require("../../../assets/icons/arrow-right.svg");

var _profile_card_button_styles = require("./profile_card_button_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_button_styles.styles);
var DEFAULT_SPRING_PROPS = {
  translation: 0
};
var ACTIVE_SPRING_PROPS = {
  translation: 6
};

var ProfileCardButtonComponent = function ProfileCardButtonComponent(_ref) {
  var children = _ref.children,
      cardVariant = _ref.cardVariant;
  var classes = useStyles({
    cardVariant: cardVariant
  });

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return DEFAULT_SPRING_PROPS;
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
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
  }, _react.default.createElement(_ui.Button, {
    customClasses: {
      container: classes.button,
      typography: classes.typography
    },
    size: "small",
    variant: "text",
    onMouseEnter: setActiveSpringProps,
    onMouseLeave: setDefaultSpringProps
  }, children), _react.default.createElement(_reactSpring.animated.span, {
    className: classes.arrowContainer,
    style: {
      transform: springProps.translation.interpolate(function (value) {
        return "translate3d(".concat(value, "px, 0, 0)");
      })
    }
  }, _react.default.createElement(_arrowRight.ReactComponent, {
    className: classes.arrow
  })));
};

var ProfileCardButton = ProfileCardButtonComponent;
exports.ProfileCardButton = ProfileCardButton;