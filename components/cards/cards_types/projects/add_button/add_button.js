"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddButton = void 0;

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _react = _interopRequireDefault(require("react"));

var AddButtonComponent = function AddButtonComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  return _react.default.createElement(_ui.Button, {
    customClasses: {
      container: receivedClasses.container
    },
    color: "primary",
    variant: "outlined",
    onClick: handleAddButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.noProject.buttonLabel",
    defaultMessage: "Add a project"
  }));
};

var AddButton = AddButtonComponent;
exports.AddButton = AddButton;