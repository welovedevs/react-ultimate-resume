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

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      receivedGlobalClasses = _useContext.receivedGlobalClasses;

  return [(0, _lodash.get)(receivedGlobalClasses, path)];
};

exports.useReceivedGlobalClasses = useReceivedGlobalClasses;