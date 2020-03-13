"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _ui = require("@wld/ui");

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _edit_dialog_field = require("../../../../commons/edit_dialog_field/edit_dialog_field");

var _slider_with_popper = require("../../../../commons/slider_with_popper/slider_with_popper");

var _visa_field = require("./visa_field/visa_field");

var _location_field = require("../../../../commons/location_field/location_field");

var _job_search_state_field = require("./job_search_state_field/job_search_state_field");

var _basic_edit_dialog_styles = require("./basic_edit_dialog_styles");

var useStyles = (0, _reactJss.createUseStyles)(_basic_edit_dialog_styles.styles);

var BasicsCardEditDialogComponent = function BasicsCardEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit,
      validationSchema = _ref.validationSchema;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var validationSchemaToPass = (0, _react.useMemo)(function () {
    return validationSchema(formatMessage);
  }, [validationSchema]);
  return _react.default.createElement(_edit_dialog.EditDialog, {
    open: open,
    onClose: onClose,
    data: data,
    onEdit: onEdit,
    validationSchema: validationSchemaToPass,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.title",
      defaultMessage: "Your basic informations"
    })
  }, function (helpers) {
    return _react.default.createElement(Content, {
      helpers: helpers
    });
  });
};

var Content = function Content(_ref2) {
  var _errors$currentCity;

  var _ref2$helpers = _ref2.helpers,
      handleValueChange = _ref2$helpers.handleValueChange,
      toggleValue = _ref2$helpers.toggleValue;
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
    classes: {
      container: classes.field
    },
    error: errors === null || errors === void 0 ? void 0 : errors.summary,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.summary.title",
      defaultMessage: "Describe yourself in a few words."
    })
  }, _react.default.createElement(_ui.TextField, {
    fullWidth: true,
    variant: "flat",
    onChange: handleChange,
    value: summary,
    name: "summary"
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: (errors === null || errors === void 0 ? void 0 : (_errors$currentCity = errors.currentCity) === null || _errors$currentCity === void 0 ? void 0 : _errors$currentCity.name) || (errors === null || errors === void 0 ? void 0 : errors.currentCity),
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.location.title",
      defaultMessage: "What's your current location?"
    })
  }, _react.default.createElement(_location_field.LocationField, {
    fullWidth: true,
    variant: "flat",
    value: currentCity === null || currentCity === void 0 ? void 0 : currentCity.name,
    onLocationSelected: handleValueChange('currentCity')
  }), _react.default.createElement(_visa_field.VisaField, {
    value: visaSponsorship,
    toggleValue: toggleValue
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.searchState,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.searchState.title",
      defaultMessage: "What's your current job search state?"
    })
  }, _react.default.createElement(_job_search_state_field.JobSearchStateField, {
    value: searchState,
    handleChange: handleChange
  })), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.codingYears,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.codingYears.title",
      defaultMessage: "How long have you been coding?"
    }),
    subtitle: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.codingYears.subtitle",
      defaultMessage: "(every experiences, studies, personal projects, work...)"
    })
  }, _react.default.createElement("div", {
    className: classes.valueSliderContainer
  }, _react.default.createElement(_ui.Typography, {
    className: classes.sliderValue
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.years",
    defaultMessage: "{countNode} year{count, plural, one {} other {s}}",
    values: {
      count: codingYears,
      countNode: _react.default.createElement("span", {
        className: classes.bolden
      }, codingYears)
    }
  })), _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "codingYears",
    value: codingYears,
    onChange: handleChange,
    min: 0,
    max: 20,
    popperCardProps: {
      customClasses: {
        container: classes.sliderPopperCard,
        arrowContainer: classes.sliderPopperCardArrowContainer
      }
    }
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.studiesLevel,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.studiesLevel.title",
      defaultMessage: "What is your highest level of formal education?"
    }),
    subtitle: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.studiesLevel.subtitle",
      defaultMessage: "Bachelor = 3 years post graduate. Master = 5 years post graduate."
    })
  }, _react.default.createElement("div", {
    className: classes.valueSliderContainer
  }, _react.default.createElement(_ui.Typography, {
    className: classes.sliderValue
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.years",
    defaultMessage: "{countNode} year{count, plural, one {} other {s}}",
    values: {
      count: studiesLevel,
      countNode: _react.default.createElement("span", {
        className: classes.bolden
      }, studiesLevel)
    }
  })), _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "studiesLevel",
    value: studiesLevel,
    onChange: handleChange,
    min: 0,
    max: 12,
    popperCardProps: {
      customClasses: {
        container: classes.sliderPopperCard,
        arrowContainer: classes.sliderPopperCardArrowContainer
      }
    }
  }))), _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: errors.experienceYears,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.experienceYears.title",
      defaultMessage: "How many years of professional experience do you have?"
    }),
    subtitle: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.editDialog.experienceYears.subtitle",
      defaultMessage: "Tech and non-tech experiences"
    })
  }, _react.default.createElement("div", {
    className: classes.valueSliderContainer
  }, _react.default.createElement(_ui.Typography, {
    className: classes.sliderValue
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.years",
    defaultMessage: "{countNode} year{count, plural, one {} other {s}}",
    values: {
      count: experienceYears,
      countNode: _react.default.createElement("span", {
        className: classes.bolden
      }, experienceYears)
    }
  })), _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "experienceYears",
    value: experienceYears,
    onChange: handleChange,
    min: 0,
    max: 20,
    popperCardProps: {
      customClasses: {
        container: classes.sliderPopperCard,
        arrowContainer: classes.sliderPopperCardArrowContainer
      }
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

var BasicsCardEditDialog = BasicsCardEditDialogComponent;
exports.BasicsCardEditDialog = BasicsCardEditDialog;