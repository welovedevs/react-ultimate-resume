"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickableTextField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _clickable_text_field_styles = require("./clickable_text_field_styles");

var KeyboardArrowDownIcon = function KeyboardArrowDownIcon(props) {
  return (/*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
      d: "M1.52 1l6 6 6-6",
      stroke: "#000",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  );
};

KeyboardArrowDownIcon.defaultProps = {
  width: "15",
  height: "8",
  viewBox: "0 0 15 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_clickable_text_field_styles.styles);

var ClickableTextFieldComponent = function ClickableTextFieldComponent(_ref) {
  var interactionsLayerRef = _ref.interactionsLayerRef,
      onClick = _ref.onClick,
      textFieldIconProps = _ref.textFieldIconProps,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses,
      _ref$arrowRotation = _ref.arrowRotation,
      arrowRotation = _ref$arrowRotation === void 0 ? 0 : _ref$arrowRotation,
      other = (0, _objectWithoutProperties2.default)(_ref, ["interactionsLayerRef", "onClick", "textFieldIconProps", "customClasses", "arrowRotation"]);
  var classes = useStyles();

  var _useSpring = (0, _reactSpring.useSpring)({
    rotation: arrowRotation
  }),
      rotationSpring = _useSpring.rotation;

  return (/*#__PURE__*/_react.default.createElement(_ui.TextField, (0, _extends2.default)({
      readOnly: true,
      className: (0, _classnames.default)(classes.container, customClasses.container)
    }, other), /*#__PURE__*/_react.default.createElement(_reactSpring.animated.span, {
      style: {
        transform: rotationSpring.interpolate(function (value) {
          return "rotate(".concat(value, "deg)");
        })
      }
    }, /*#__PURE__*/_react.default.createElement(_ui.TextFieldIcon, textFieldIconProps, /*#__PURE__*/_react.default.createElement(KeyboardArrowDownIcon, null))), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
      ref: interactionsLayerRef,
      className: (0, _classnames.default)(classes.handleInteractionsLayer, customClasses.handleInteractionsLayer),
      type: "button"
    }, {
      onClick: onClick
    })))
  );
};

var ClickableTextField = ClickableTextFieldComponent;
exports.ClickableTextField = ClickableTextField;