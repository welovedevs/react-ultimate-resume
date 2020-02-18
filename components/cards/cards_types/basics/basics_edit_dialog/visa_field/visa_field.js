"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisaField = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _checkbox_group = require("../../../../../commons/checkbox_field/checkbox_group");

var _visa_field_styles = require("./visa_field_styles");

var useStyles = (0, _reactJss.createUseStyles)(_visa_field_styles.styles);

var VisaFieldComponent = function VisaFieldComponent(_ref) {
  var value = _ref.value,
      toggleValue = _ref.toggleValue,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  return _react.default.createElement(_checkbox_group.CheckboxField, {
    classes: {
      container: (0, _classnames.default)(classes.container, receivedClasses.container)
    },
    variant: "outlined",
    color: "primary",
    title: _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.visaSponsorship",
      defaultMessage: "I require a visa sponsorship"
    })),
    value: value,
    onClick: toggleValue('visaSponsorship'),
    onChange: toggleValue('visaSponsorship'),
    checked: value
  });
};

var VisaField = VisaFieldComponent;
exports.VisaField = VisaField;