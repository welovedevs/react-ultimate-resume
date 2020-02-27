"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAdditionalNodes = void 0;

var _react = require("react");

var _lodash = require("lodash");

var _contexts = require("../../utils/context/contexts");

var useAdditionalNodes = function useAdditionalNodes() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      additionalNodes = _useContext.additionalNodes;

  return [(0, _lodash.get)(additionalNodes, path)];
};

exports.useAdditionalNodes = useAdditionalNodes;