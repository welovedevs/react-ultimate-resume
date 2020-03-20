"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useReceivedGlobalClasses = void 0;

var _react = require("react");

var _lodash = require("lodash");

var _contexts = require("../../utils/context/contexts");

var useReceivedGlobalClasses = function useReceivedGlobalClasses() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useContext = (0, _react.useContext)(_contexts.StaticDataContext),
      receivedGlobalClasses = _useContext.receivedGlobalClasses;

  return [(0, _lodash.get)(receivedGlobalClasses, path, defaultValue)];
};

exports.useReceivedGlobalClasses = useReceivedGlobalClasses;