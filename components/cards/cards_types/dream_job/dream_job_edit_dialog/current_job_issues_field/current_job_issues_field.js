"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentJobIssuesField = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _checkbox_group = require("../../../../../commons/checkbox_group/checkbox_group");

var _checkbox_group2 = require("../../../../../commons/checkbox_field/checkbox_group");

var _job_issues_utils = require("../../../../../../utils/enums/job_issues/job_issues_utils");

var _edit_dialog_field = require("../../../../../commons/edit_dialog_field/edit_dialog_field");

var _current_job_issues_field_spring_props = require("./current_job_issues_field_spring_props");

var _job_issues_translations = require("../../../../../../utils/enums/job_issues/job_issues_translations");

var _current_job_issues_field_styles = require("./current_job_issues_field_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useStyles = (0, _reactJss.createUseStyles)(_current_job_issues_field_styles.styles);

var CurrentJobIssuesFieldComponent = function CurrentJobIssuesFieldComponent(_ref) {
  var error = _ref.error,
      checkboxGroupCurrentJobIssues = _ref.checkboxGroupCurrentJobIssues,
      checkedCurrentJobIssues = _ref.checkedCurrentJobIssues,
      onChange = _ref.onChange,
      toggleOtherCurrentJobIssue = _ref.toggleOtherCurrentJobIssue,
      otherCurrentJobIssue = _ref.otherCurrentJobIssue,
      handleChange = _ref.handleChange,
      currentJobIssues = _ref.currentJobIssues;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var transitions = (0, _reactSpring.useTransition)(otherCurrentJobIssue !== null, function (item) {
    return "other_field_".concat(item ? 'visible' : 'invisible');
  }, _objectSpread({}, _current_job_issues_field_spring_props.CURRENT_JOB_ISSUES_FIELD_OTHER_TEXTFIELD_TRANSITIONS_SPRING_PROPS, {
    unique: true
  }));
  return _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: error,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "DreamJob.editDialog.currentJobIssues.title",
      defaultMessage: "Which issues do you encounter in your current job?"
    })
  }, _react.default.createElement(_checkbox_group.CheckboxGroup, {
    rows: 2,
    values: checkboxGroupCurrentJobIssues,
    translations: _job_issues_translations.translations,
    value: checkedCurrentJobIssues,
    name: "perks",
    variant: "outlined",
    onChange: onChange
  }), _react.default.createElement("div", {
    className: classes.othersCheckbox
  }, _react.default.createElement(_checkbox_group2.CheckboxField, {
    title: _react.default.createElement(_ui.Typography, null, formatMessage(_job_issues_translations.translations.other)),
    onClick: toggleOtherCurrentJobIssue,
    checked: otherCurrentJobIssue !== null,
    variant: "outlined",
    color: "secondary"
  })), transitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item && _react.default.createElement(_ui.TextField, {
      fullWidth: true,
      key: key,
      containerElement: _reactSpring.animated.div,
      customClasses: {
        container: (0, _classnames.default)(classes.textField, classes.otherTextField)
      },
      onChange: handleChange,
      name: "currentJobIssue[".concat(_job_issues_utils.JobIssues.OTHER, "]"),
      value: currentJobIssues[_job_issues_utils.JobIssues.OTHER],
      variant: "flat",
      containerProps: {
        style: props
      }
    });
  }));
};

var CurrentJobIssuesField = CurrentJobIssuesFieldComponent;
exports.CurrentJobIssuesField = CurrentJobIssuesField;