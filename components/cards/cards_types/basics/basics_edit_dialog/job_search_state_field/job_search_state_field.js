"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobSearchStateField = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _select = require("../../../../../commons/select/select");

var _job_search_state = require("../../../../../../utils/enums/job_serachstate/job_search_state");

var _job_search_state_translations = require("../../../../../../utils/enums/job_serachstate/job_search_state_translations");

var JobSearchStateFieldComponent = function JobSearchStateFieldComponent(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return _react.default.createElement(_select.Select, {
    value: value,
    onChange: handleChange('searchState'),
    textFieldProps: {
      variant: 'flat',
      fullWidth: true
    }
  }, _job_search_state.JOB_SEARCH_STATE.map(function (elemValue, index) {
    return _react.default.createElement(_ui.ListItem, {
      key: "job_search_state".concat(elemValue, "_").concat(index),
      value: elemValue
    }, formatMessage(_job_search_state_translations.translations[elemValue]));
  }));
};

var JobSearchStateField = JobSearchStateFieldComponent;
exports.JobSearchStateField = JobSearchStateField;