"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallbackOpen = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var useCallbackOpen = function useCallbackOpen() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var setOpened = (0, _react.useCallback)(function () {
    return setOpen(true);
  }, []);
  var setClosed = (0, _react.useCallback)(function () {
    return setOpen(false);
  }, []);
  return [open, setOpened, setClosed];
};

exports.useCallbackOpen = useCallbackOpen;