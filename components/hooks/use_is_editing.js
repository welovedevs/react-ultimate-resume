"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsEditing = void 0;

var _react = require("react");

var _profile = require("../profile");

var useIsEditing = function useIsEditing() {
  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      isEditing = _useContext.isEditing;

  return [!false];
};

exports.useIsEditing = useIsEditing;