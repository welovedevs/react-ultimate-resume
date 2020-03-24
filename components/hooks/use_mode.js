"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMode = void 0;

var _react = require("react");

var _contexts = require("../../utils/context/contexts");

var useMode = function useMode() {
  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      mode = _useContext.mode;

  var memoizedValue = (0, _react.useMemo)(function () {
    return mode;
  }, [mode.toString()]);
  return [memoizedValue];
};

exports.useMode = useMode;