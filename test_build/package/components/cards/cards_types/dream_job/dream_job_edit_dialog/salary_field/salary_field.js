"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SalaryField = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _edit_dialog_field = require("../../../../../commons/edit_dialog_field/edit_dialog_field");

var _has_only_freelance_contract = require("../../../../utils/has_only_freelance_contract");

var SalaryFieldComponent = function SalaryFieldComponent(_ref) {
  var _ref2;

  var salary = _ref.salary,
      averageDailyRate = _ref.averageDailyRate,
      errors = _ref.errors,
      contractTypes = _ref.contractTypes,
      handleChange = _ref.handleChange;
  var isFreelance = (0, _has_only_freelance_contract.hasOnlyFreelanceContract)(contractTypes);
  return _react.default.createElement(_edit_dialog_field.EditDialogField, {
    title: _react.default.createElement(Title, {
      isFreelance: isFreelance
    }),
    error: errors === null || errors === void 0 ? void 0 : errors[isFreelance ? 'averageDailyRate' : 'salary']
  }, _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    onChange: handleChange,
    name: isFreelance ? 'averageDailyRate' : 'salary',
    value: (_ref2 = isFreelance ? averageDailyRate : salary) !== null && _ref2 !== void 0 ? _ref2 : 0,
    variant: "flat"
  }));
};

var Title = function Title(_ref3) {
  var isFreelance = _ref3.isFreelance;

  if (isFreelance) {
    return _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "DreamJob.editDialog.averageDailyRate.title",
      defaultMessage: "What's your average daily rate?"
    });
  }

  return _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "DreamJob.editDialog.salary.title",
    defaultMessage: "What's your desired salary?"
  });
};

var SalaryField = SalaryFieldComponent;
exports.SalaryField = SalaryField;