"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _ui = require("@wld/ui");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _slider_with_popper = require("../../../../commons/slider_with_popper/slider_with_popper");

var _checkbox_group = require("../../../../commons/checkbox_field/checkbox_group");

var _location_field = require("../../../../commons/location_field/location_field");

var _reactJss = require("react-jss");

var _basic_card_edit_dialog_styles = require("./basic_card_edit_dialog_styles");

var _select = require("../../../../commons/select/select");

var _job_search_state = require("../../../../../utils/enums/job_serachstate/job_search_state");

var _job_search_state_translations = _interopRequireDefault(require("../../../../../utils/enums/job_serachstate/job_search_state_translations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _reactJss.createUseStyles)(_basic_card_edit_dialog_styles.styles);

var BasicsCardEditDialogContent = function BasicsCardEditDialogContent(_ref) {
  var _errors$currentCity;

  var _ref$helpers = _ref.helpers,
      handleValueChange = _ref$helpers.handleValueChange,
      toggleValue = _ref$helpers.toggleValue;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      errors = _useFormikContext.errors,
      handleChange = _useFormikContext.handleChange;

  var currentCity = values.currentCity,
      experienceYears = values.experienceYears,
      studiesLevel = values.studiesLevel,
      codingYears = values.codingYears,
      codingReason = values.codingReason,
      visaSponsorship = values.visaSponsorship,
      searchState = values.searchState,
      personalDescription = values.personalDescription,
      summary = values.summary;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.summary,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.summary.title",
      defaultMessage: "Describe yourself in a few words"
    })
  }, _react.default.createElement(_ui.TextField, {
    onChange: handleChange,
    name: "summary",
    value: summary,
    variant: "flat",
    fullWidth: true
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: (errors === null || errors === void 0 ? void 0 : (_errors$currentCity = errors.currentCity) === null || _errors$currentCity === void 0 ? void 0 : _errors$currentCity.name) || (errors === null || errors === void 0 ? void 0 : errors.currentCity),
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.location.title",
      defaultMessage: "What's your current location?"
    })
  }, _react.default.createElement(_location_field.LocationField, {
    value: currentCity === null || currentCity === void 0 ? void 0 : currentCity.name,
    onLocationSelected: handleValueChange('currentCity')
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.visaSponsorship,
    classes: {
      container: classes.visaSponsorship
    }
  }, _react.default.createElement(_checkbox_group.CheckboxField, {
    variant: "outlined",
    title: _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.visaSponsorship",
      defaultMessage: "I require a visa sponsorship"
    })),
    value: visaSponsorship,
    onClick: toggleValue('visaSponsorship'),
    onChange: toggleValue('visaSponsorship'),
    checked: visaSponsorship
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.searchState,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.searchState.title",
      defaultMessage: "What's your current job search state?"
    })
  }, _react.default.createElement(_select.Select, {
    variant: "outlined",
    value: searchState,
    onChange: handleChange('searchState'),
    textFieldIconProps: {
      className: classes.selectIcon
    }
  }, _job_search_state.JOB_SEARCH_STATE.map(function (elemValue, index) {
    return _react.default.createElement(_ui.ListItem, {
      key: "jobsearch_state".concat(elemValue, "_").concat(index),
      value: elemValue
    }, formatMessage(_job_search_state_translations.default[elemValue]));
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.codingYears,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.codingYears.title",
      defaultMessage: "How long have you been coding?"
    }),
    subtitle: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.codingYears.subtitle",
      defaultMessage: "(every experiences, studies, personal projects, work...)"
    })
  }, _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "codingYears",
    value: codingYears,
    onChange: handleChange,
    min: 0,
    max: 20
  }), _react.default.createElement(_ui.Typography, {
    className: classes.sliderLabel
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.years",
    defaultMessage: "{count, plural, one {# year} other {# years}}",
    values: {
      count: codingYears
    }
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.studiesLevel,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.studiesLevel.title",
      defaultMessage: "What is your highest level of formal education?"
    }),
    subtitle: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.studiesLevel.subtitle",
      defaultMessage: "Bachelor = 3 years post graduate, Master = 5 years post graduate"
    })
  }, _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "studiesLevel",
    value: studiesLevel,
    onChange: handleChange,
    min: 0,
    max: 12
  }), _react.default.createElement(_ui.Typography, {
    className: classes.sliderLabel
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.years",
    defaultMessage: "{count, plural, one {# year} other {# years}}",
    values: {
      count: studiesLevel
    }
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.experienceYears,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.experienceYears.title",
      defaultMessage: "How many years of professional experience do you have?"
    }),
    subtitle: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.experienceYears.subtitle",
      defaultMessage: "Tech and non-tech experiences "
    })
  }, _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "experienceYears",
    value: experienceYears,
    onChange: handleChange,
    min: 0,
    max: 20
  }), _react.default.createElement(_ui.Typography, {
    className: classes.sliderLabel
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.years",
    defaultMessage: "{count, plural, one {# year} other {# years}}",
    values: {
      count: experienceYears
    }
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.codingReason,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.codingReason.title",
      defaultMessage: "What motivates you to write code?"
    })
  }, _react.default.createElement(_ui.TextField, {
    onChange: handleChange,
    name: "codingReason",
    value: codingReason,
    variant: "flat",
    fullWidth: true
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.personalDescription,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.personalDescription.title",
      defaultMessage: "Do you want to tell a bit more about you?"
    }),
    subtitle: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.personalDescription.subtitle",
      defaultMessage: "Use this space to describe yourself a bit more ! "
    })
  }, _react.default.createElement(_ui.TextField, {
    multiline: true,
    rows: 4,
    onChange: handleChange,
    name: "personalDescription",
    value: personalDescription,
    variant: "flat",
    fullWidth: true
  })));
};

var BasicsCardEditDialog = function BasicsCardEditDialog(_ref2) {
  var data = _ref2.data,
      onEdit = _ref2.onEdit,
      validationSchema = _ref2.validationSchema,
      onClose = _ref2.onClose;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    data: data,
    onEdit: onEdit,
    onClose: onClose,
    validationSchema: validationSchemaToPass,
    open: true,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.title",
      defaultMessage: "Your basic information"
    })
  }, function (helpers) {
    return _react.default.createElement(BasicsCardEditDialogContent, {
      helpers: helpers
    });
  });
};

exports.BasicsCardEditDialog = BasicsCardEditDialog;