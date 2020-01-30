"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickableTextField = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _clickable_text_field_styles = _interopRequireDefault(require("./clickable_text_field_styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var KeyboardArrowDownIcon = function KeyboardArrowDownIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M1.52 1l6 6 6-6",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

KeyboardArrowDownIcon.defaultProps = {
  width: "15",
  height: "8",
  viewBox: "0 0 15 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ClickableTextFieldComponent = function ClickableTextFieldComponent(_ref) {
  var interactionsLayerRef = _ref.interactionsLayerRef,
      onClick = _ref.onClick,
      textFieldIconProps = _ref.textFieldIconProps,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses,
      _ref$arrowRotation = _ref.arrowRotation,
      arrowRotation = _ref$arrowRotation === void 0 ? 0 : _ref$arrowRotation,
      classes = _ref.classes,
      other = _objectWithoutProperties(_ref, ["interactionsLayerRef", "onClick", "textFieldIconProps", "customClasses", "arrowRotation", "classes"]);

  var _useSpring = (0, _reactSpring.useSpring)({
    rotation: arrowRotation
  }),
      rotationSpring = _useSpring.rotation;

  return _react.default.createElement(_ui.TextField, _extends({
    readOnly: true,
    className: (0, _classnames.default)(classes.container, customClasses.container)
  }, other), _react.default.createElement(_reactSpring.animated.span, {
    style: {
      transform: rotationSpring.interpolate(function (value) {
        return "rotate(".concat(value, "deg)");
      })
    }
  }, _react.default.createElement(_ui.TextFieldIcon, textFieldIconProps, _react.default.createElement(KeyboardArrowDownIcon, null))), _react.default.createElement("button", _extends({
    ref: interactionsLayerRef,
    className: (0, _classnames.default)(classes.handleInteractionsLayer, customClasses.handleInteractionsLayer),
    type: "button"
  }, {
    onClick: onClick
  })));
};

var ClickableTextField = (0, _reactJss.default)(_clickable_text_field_styles.default)(ClickableTextFieldComponent);
exports.ClickableTextField = ClickableTextField;