"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoDataButton = void 0;

var _ui = require("@wld/ui");

var _react = _interopRequireDefault(require("react"));

var NoDataButtonComponent = function NoDataButtonComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick,
      children = _ref.children,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  return /*#__PURE__*/_react.default.createElement(_ui.Button, {
    customClasses: {
      container: receivedClasses.container
    },
    style: {
      color: 'inherit'
    },
    variant: "outlined",
    onClick: handleAddButtonClick
  }, children);
};

var NoDataButton = NoDataButtonComponent;
exports.NoDataButton = NoDataButton;