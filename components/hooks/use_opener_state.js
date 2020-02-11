"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenerState = void 0;

var _react = require("react");

var _core = require("@material-ui/core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useOpenerState = function useOpenerState() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$mobileWidth = _ref.mobileWidth,
      mobileWidth = _ref$mobileWidth === void 0 ? 560 : _ref$mobileWidth,
      defaultHandlers = _ref.defaultHandlers;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
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