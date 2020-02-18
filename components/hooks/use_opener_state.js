"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenerState = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _core = require("@material-ui/core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useOpenerState = function useOpenerState() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$mobileWidth = _ref.mobileWidth,
      mobileWidth = _ref$mobileWidth === void 0 ? 560 : _ref$mobileWidth,
      defaultHandlers = _ref.defaultHandlers;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var setOpened = (0, _react.useCallback)(function () {
    return setOpen(true);
  }, []);
  var setClosed = (0, _react.useCallback)(function () {
    return setOpen(false);
  }, []);
  var toggle = (0, _react.useCallback)(function () {
    return setOpen(!open);
  }, [open]);
  var handleClick = (0, _react.useCallback)(function () {
    if (typeof defaultHandlers.onClick === 'function') {
      defaultHandlers.onClick();
    }

    toggle();
  }, [defaultHandlers, toggle]);
  var isMobile = (0, _core.useMediaQuery)("(max-width: ".concat(mobileWidth, "px)"), {
    defaultMatches: true
  });
  var eventsHandlerElementProps = (0, _react.useMemo)(function () {
    return _objectSpread({}, isMobile && {
      onClick: handleClick
    }, {}, !isMobile && {
      onMouseEnter: setOpened,
      onMouseLeave: setClosed,
      onFocus: setOpened,
      onBlur: setClosed
    });
  }, [isMobile, setOpened, setClosed, toggle]);
  return [open, eventsHandlerElementProps, {
    setOpened: setOpened,
    setClosed: setClosed,
    toggle: toggle
  }];
};

exports.useOpenerState = useOpenerState;