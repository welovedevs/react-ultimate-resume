"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCard = exports.ProfileCardContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _profile_card_styles = require("./profile_card_styles");

var _profile_card_side = require("../profile_card_side/profile_card_side");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_styles.styles);
var ProfileCardContext = (0, _react.createContext)({});
exports.ProfileCardContext = ProfileCardContext;

var ProfileCardComponent = function ProfileCardComponent(_ref) {
  var data = _ref.data,
      sides = _ref.sides,
      receivedSide = _ref.side,
      variant = _ref.variant;
  var classes = useStyles({
    variant: variant
  });

  var _useState = (0, _react.useState)('front'),
      _useState2 = _slicedToArray(_useState, 2),
      side = _useState2[0],
      setSide = _useState2[1];

  var hasSideChanged = (0, _react.useRef)(false);
  var handleMouseEnter = (0, _react.useCallback)(function () {
    return setSide('back');
  }, []);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    return setSide('front');
  }, []); // Either 'front' or 'back'.

  (0, _react.useEffect)(function () {
    if (receivedSide) {
      setSide(receivedSide);
    }
  }, [receivedSide]);
  (0, _react.useEffect)(function () {
    if (hasSideChanged.current) {
      return;
    }

    hasSideChanged.current = true;
  }, [side]);
  var transitions = (0, _reactSpring.useTransition)(side, function (item) {
    return "card_side_".concat(item);
  }, {
    from: {
      opacity: 0,
      transform: 'translate3d(50%,0,0)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)'
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-25%,0,0)'
    },
    config: _reactSpring.config.default,
    immediate: !hasSideChanged.current
  });
  return _react.default.createElement(_ui.Card, {
    customClasses: {
      container: classes.container
    },
    elevation: 1,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, _react.default.createElement(ProfileCardContext.Provider, {
    value: {
      side: side,
      setSide: setSide
    }
  }, transitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;

    var SideComponent = sides[item] || function () {
      return null;
    };

    return _react.default.createElement(_profile_card_side.ProfileCardSide, {
      key: key,
      style: props
    }, _react.default.createElement(SideComponent, {
      data: data,
      variant: variant
    }));
  })));
};

var ProfileCard = ProfileCardComponent;
exports.ProfileCard = ProfileCard;